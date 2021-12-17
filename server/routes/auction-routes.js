const auctionRouter = require("express").Router();
const {
  postAuction,
  getAuctions,
  getAuction,
  putBidAuction,
} = require("../services/auction-services");
const { authenticateToken } = require("../middlewares");
auctionRouter.post("/", authenticateToken, postAuction);
auctionRouter.get("/", authenticateToken, getAuctions);
auctionRouter.get("/:id", authenticateToken, getAuction);
auctionRouter.put("/:id", authenticateToken, putBidAuction);
module.exports = auctionRouter;
