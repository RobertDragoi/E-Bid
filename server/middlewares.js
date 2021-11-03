const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.headers["x-auth-token"];
  if (!token) {
    return res.status(401).send("No token provided");
  }
  const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decodedUser.user;
  next();
};

module.exports = { authenticateToken };
