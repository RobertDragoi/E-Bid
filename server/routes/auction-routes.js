const auctionRouter = require("express").Router();
const {
  postAuction,
  getAuctions,
  putBidAuction,
} = require("../services/auction-services");
const { authenticateToken } = require("../middlewares");
auctionRouter.post("/", authenticateToken, postAuction);
auctionRouter.get("/", authenticateToken, getAuctions);
auctionRouter.put("/:id", authenticateToken, putBidAuction);
module.exports = auctionRouter;
