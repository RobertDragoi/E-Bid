const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const login = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });

  if (user) {
    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      return res.status(400).send("Invalid password!");
    }

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.send(token);
  } else {
    return res.status(400).send("Invalid email!");
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      address,
    });
    await user.save();
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.send(token);
  } catch (error) {
    res.status(400).send("An account with this email already exists!");
  }
};
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id, "-password");
    res.json(user);
  } catch (error) {
    res.status(400).send("User can't be found!");
  }
};
module.exports = { login, register, getUser };
