const mongoose = require("mongoose");
let UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
});
module.exports = mongoose.model("User", UserSchema);
