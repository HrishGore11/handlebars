const express = require("express");
const { homePage } = require("../controllers/userController");

const router = express.Router();

router.get("/home", homePage);

module.exports = router;
