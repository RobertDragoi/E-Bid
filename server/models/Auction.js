const mongoose = require("mongoose");
let AuctionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  prices: [{ type: Number, required: true, default: [] }],
  buynowPrice: { type: Number, required: true },
  participation: { type: Boolean, default: false },
  date: { type: Date, required: true, default: Date.now },
});
module.exports = mongoose.model("Auction", AuctionSchema);
