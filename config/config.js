const mongoose = require("mongoose");
// require("dotenv").config();//for git hub
// let mongourl = process.env.MONGODB_URL; //for git hub
let mongourl =
  "mongodb+srv://nirmalakhan:admin@cluster0.ojguvni.mongodb.net/carsmongodb";

mongoose.connect(mongourl);

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("mongodb fail to connect");
});

connection.on("connected", () => {
  console.log("mongodb success to connect");
});

module.exports = mongoose;
