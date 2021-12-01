const Auction = require("../models/Auction");

const postAuction = async (req, res) => {
  try {
    const { title, description, buynowPrice } = req.body;
    const auction = new Auction({ title, description, buynowPrice });
    await auction.save();
    res.send(auction);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = { postAuction };
