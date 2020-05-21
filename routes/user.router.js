const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");
router.post("/register", controller.postuser);
router.post("/auth", controller.getuser);
router.get("/list", controller.getalluser);
module.exports = router;
