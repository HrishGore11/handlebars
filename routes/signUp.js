const express = require("express");
const { SignUpPage } = require("../controllers/userController");

const router = express.Router();

router.get("/signup", SignUpPage);

module.exports = router;
