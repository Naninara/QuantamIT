const mongoose = require("mongoose");
const express = require("express");
const app = express();
async function connectDb() {
  await mongoose
    .connect(
      "mongodb+srv://nmvmanikanta:MavinNara1234@cluster0.mktinqb.mongodb.net/QunatamIT?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Db Connected");
    })
    .catch((err) => console.log(err));
}

module.exports = connectDb;
