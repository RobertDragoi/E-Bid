const auctionRouter = require("express").Router();
const { postAuction } = require("../services/auction-services");
const { authenticateToken } = require("../middlewares");
auctionRouter.post("/", authenticateToken, postAuction);
module.exports = auctionRouter;
