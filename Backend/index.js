const express = require("express");
const cors = require("cors");

const authApi = require("./api/authApi");
const connectDb = require("./Helpers/ConnectDb");
const UserSchema = require("./Models/UserSchema");
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/auth", authApi);

connectDb();

app.listen(3500, () => {
  console.log("server Listening on port 3500 and Db Connected");
});
