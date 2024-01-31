const UserSchema = require("../Models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signInController = async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await UserSchema.findOne({ username });
  if (!foundUser) {
    res.status(400).json({ msg: "No User Found" });
    return;
  }

  const isPasswordMatch = await bcrypt.compare(password, foundUser.password);
  if (isPasswordMatch) {
    const JWT = jwt.sign(
      { username: foundUser.username, email: foundUser.email },
      "Ushhhhh its a secret key",
      { expiresIn: "1d" }
    );
    res.status(200).json({ jwt: JWT });
  } else {
    res.status(401).json({ msg: "invalid password" });
  }
};

module.exports = signInController;
