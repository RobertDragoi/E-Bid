const mongoose = require("mongoose");

const ConnectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = { ConnectDataBase };
