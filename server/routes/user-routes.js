const userRouter = require("express").Router();
const { login, register } = require("../services/user-services");
userRouter.post("/login", login);
userRouter.post("/register", register);
module.exports = userRouter;
