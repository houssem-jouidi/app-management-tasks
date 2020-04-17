const express = require("express");
const router = express.Router();
const passport = require("passport");
const controller = require("../controllers/task.controller");
router.post(
  "/lists",
  passport.authenticate("jwt", { session: false }),
  controller.getalltask
);
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  controller.posttask
);
router.get(
  "/task/:id",
  passport.authenticate("jwt", { session: false }),
  controller.getTaskbyId
);
router.put(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  controller.EditTask
);
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  controller.deletetask
);

module.exports = router;
