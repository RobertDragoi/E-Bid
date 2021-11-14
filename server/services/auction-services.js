const Auction = require("../models/Auction");

const postAuction = async (req, res) => {
  try {
    const { title, description, buynowPrice } = req.body;
    const auction = new Auction({ title, description, buynowPrice });
    await auction.save();
    console.log(req.user.id);
    res.send(auction.id);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = { postAuction };
