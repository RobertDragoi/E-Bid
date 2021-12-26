const mongoose = require("mongoose");
let AuctionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  prices: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      price: { type: Number, required: true },
    },
  ],
  startPrice: { type: Number, required: true },
  participation: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, required: true, default: Date.now },
});
module.exports = mongoose.model("Auction", AuctionSchema);
