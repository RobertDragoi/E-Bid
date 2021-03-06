const Auction = require("../models/Auction");

const postAuction = async (req, res) => {
  try {
    const { title, description, startPrice } = req.body;
    const auction = new Auction({
      title,
      description,
      user: req.user.id,
      startPrice,
      participation: req.user.id,
    });
    await auction.save();
    await Auction.findById(auction._id)
      .populate([
        { path: "user", select: "name auctions _id address" },
        {
          path: "prices",
          populate: { path: "user", select: "name auctions _id address" },
        },
      ])
      .exec((err, auction) => res.send(auction));
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const putBidAuction = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    let auction = await Auction.findById(id);
    let max;

    if (auction.prices.length > 0) {
      max = auction.prices.reduce(function (prev, current) {
        return prev.price > current.price ? prev : current;
      });
    }

    if (req.user.id === auction.user._id.toString()) {
      return res.status(400).send("You can't bid at your own auction");
    }

    if (price <= auction.startPrice || price <= max?.price) {
      return res.status(400).send("Your bid must be higher");
    }

    await Auction.findByIdAndUpdate(
      id,
      {
        $push: {
          prices: { user: req.user.id, price },
        },
      },
      { new: true }
    )
      .populate([
        { path: "user", select: "name auctions _id address" },
        {
          path: "prices",
          populate: { path: "user", select: "name auctions _id address" },
        },
      ])
      .exec((err, auction) => res.send(auction));
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getAuctions = async (req, res) => {
  try {
    await Auction.find()
      .sort({ date: -1 })
      .populate([
        { path: "user", select: "name auctions _id address" },
        {
          path: "prices",
          populate: { path: "user", select: "name auctions _id address" },
        },
      ])
      .exec((err, auctions) => res.send(auctions));
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getAuction = async (req, res) => {
  try {
    const { id } = req.params;
    await Auction.findById(id)
      .populate([
        { path: "user", select: "name auctions _id address" },
        {
          path: "prices",
          populate: { path: "user", select: "name auctions _id address" },
        },
      ])
      .exec((err, auction) => res.send(auction));
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getUsersAuctions = async (req, res) => {
  try {
    const { id } = req.params;
    await Auction.find({ user: id })
      .populate([
        { path: "user", select: "name auctions _id address" },
        {
          path: "prices",
          populate: { path: "user", select: "name auctions _id address" },
        },
      ])
      .exec((err, auctions) => res.send(auctions));
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  postAuction,
  getAuctions,
  putBidAuction,
  getAuction,
  getUsersAuctions,
};
