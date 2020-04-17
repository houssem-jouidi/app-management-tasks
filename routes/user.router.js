const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");
router.post("/register", controller.postuser);
router.post("/auth", controller.getuser);
module.exports = router;
