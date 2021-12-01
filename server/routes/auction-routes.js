const auctionRouter = require("express").Router();
const { postAuction, getAuctions } = require("../services/auction-services");
const { authenticateToken } = require("../middlewares");
auctionRouter.post("/", authenticateToken, postAuction);
auctionRouter.get("/", authenticateToken, getAuctions);
module.exports = auctionRouter;
