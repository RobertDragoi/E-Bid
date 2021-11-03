const userRouter = require("express").Router();
const { login, register, getUser } = require("../services/user-services");
const { authenticateToken } = require("../middlewares");
userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/", authenticateToken, getUser);
module.exports = userRouter;
