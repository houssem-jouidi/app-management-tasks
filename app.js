require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const routerUser = require("./routes/user.router");
const routertask = require("./routes/task.router");
const passport = require("passport");
const path = require("path");
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("connected to database");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// passpowt config
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);
// end passport config

app.use(express.static(path.join(__dirname, "public")));
app.use("/api/user", routerUser);
app.use("/api/task", routertask);
app.use((req, res, next) => {
  res.send("not found");
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`server running on port: ${process.env.PORT}`);
});
