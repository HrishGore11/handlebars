const express = require("express");
const { loginPage } = require("../controllers/userController");

const router = express.Router();

router.get("/login", loginPage);

module.exports = router;
