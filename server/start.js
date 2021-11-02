const express = require("express");
const app = express();
const { ConnectDataBase } = require("./database");
require("dotenv").config();
ConnectDataBase();
app.use(express.json({ extended: false }));
app.use("/api/user", require("./routes/user-routes"));
app.listen(8080, () => console.log("listening on port 8080"));
