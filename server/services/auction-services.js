const Auction = require("../models/Auction");

const postAuction = async (req, res) => {
  try {
    const { title, description, startPrice } = req.body;
    const auction = new Auction({ title, description, startPrice });
    await auction.save();
    res.send(auction);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find().sort({ date: -1 });
    res.send(auctions);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = { postAuction, getAuctions };
