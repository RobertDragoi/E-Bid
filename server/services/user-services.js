const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User=require('../models/User')


const login=async(req,res)=>{
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      const passwordCorrect = await bcrypt.compare(password, user.password);

      if (!passwordCorrect) {
        return res.status(400).send( "Invalid password!");
      }

      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: "1h" });
      res.json({ token: token });
    } else {
      return res.status(400).send( "Invalid email!" );
    }
}

const register = async(req, res)=>{
    try {
        let { name, email, password, address} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        let user;
            user = new User({
              name,
              email,
              password: hashedPassword,
              address,
              
            });
            await user.save();
            break;
        
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token: token });
      } catch (error) {
        console.log(error.message);
        res
          .status(400)
          .send("An account with this email already exists" );
      }
    
}