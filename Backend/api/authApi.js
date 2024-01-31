const express = require("express");
const signInController = require("../Controllers/SignInController");
const signupController = require("../Controllers/SignupController");

const router = express.Router();

router.route("/signup").post(signupController);
router.route("/signin").post(signInController);

module.exports = router;
