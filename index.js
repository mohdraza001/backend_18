const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require('./src/utils/db');
const jwtvalidate = require("./src/middleware/authMiddleware");
const session = require("./src/middleware/sessionMiddleware");

mongoose.set("strictQuery", true);

app.use("/static", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session)

connectDB();

app.get("/",jwtvalidate(), (req, res) => {
  res.json({msg:'try'});
});

app.listen(PORT, (err) => {
  if (err) throw err;
  else console.log(`Server is run on ${PORT}`);
});
