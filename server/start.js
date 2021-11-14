const express = require("express");
const app = express();
const cors = require("cors");
const { ConnectDataBase } = require("./database");
require("dotenv").config();
ConnectDataBase();
app.use(cors());
app.use(express.json({ extended: false }));
app.use("/api/user", require("./routes/user-routes"));
app.use("/api/auction", require("./routes/auction-routes"));
app.listen(8080, () => console.log("listening on port 8080"));
