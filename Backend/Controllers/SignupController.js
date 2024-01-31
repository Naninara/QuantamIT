const UserSchema = require("../Models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupController = async (req, res) => {
  try {
    const { username, DOB, email, password } = req.body;

    const isGmailExist = await UserSchema.findOne({ email });

    if (isGmailExist) {
      return res.status(409).send("Gmail Already exist");
    }

    const isUsernameExist = await UserSchema.findOne({ username: username });

    if (isUsernameExist) {
      return res.status(409).send("User Already exist");
    }
    const hashedPWD = await bcrypt.hash(password, 10);

    UserSchema.create({ username, DOB, email, password: hashedPWD })
      .then((response) => {
        const JWT = jwt.sign(
          { username: response.username, email: response.email },
          "Ushhhhh its a secret key",
          { expiresIn: "1d" }
        );
        res.status(201).json({ jwt: JWT });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = signupController;
