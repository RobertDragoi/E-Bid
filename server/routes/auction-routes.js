const auctionRouter = require("express").Router();
const {
  postAuction,
  getAuctions,
  getAuction,
  getUsersAuctions,
  putBidAuction,
} = require("../services/auction-services");
const { authenticateToken } = require("../middlewares");
auctionRouter.post("/", authenticateToken, postAuction);
auctionRouter.get("/", authenticateToken, getAuctions);
auctionRouter.get("/:id", authenticateToken, getAuction);
auctionRouter.get("/user/:id", authenticateToken, getUsersAuctions);
auctionRouter.put("/:id", authenticateToken, putBidAuction);
module.exports = auctionRouter;
