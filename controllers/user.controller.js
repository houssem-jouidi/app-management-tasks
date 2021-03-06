const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const controler = {};
const SECRET = "kfjngiurhguioghtiou";
controler.postuser = async (req, res, next) => {
  try {
    let user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    const result = await user.save();

    res.json({
      message: true,
      result: result,
    });
  } catch (error) {
    res.json({
      message: false,
      err: error,
    });
  }
};

controler.getuser = async (req, res, next) => {
  try {
    const password = req.body.password;
    const email = req.body.email;
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        return res.json({
          success: false,
          role: false,
          message: "Error, please try again",
        });
      }
      if (!user) {
        return res.json({
          success: false,
          role: false,
          message: "Account Not Found",
        });
      }
      user.ispasswordmatch(password, user.password, (err, ismatch) => {
        if (!ismatch) {
          return res.json({
            success: false,
            role: false,
            message: "Password Invalid",
          });
        }

        const token = jwt.sign({ user }, process.env.SECRET || SECRET);
        let returnuser = {
          id: user._id,
          name: user.username,
          email: user.email,
          role: user.role,
          token,
        };
        return res.json({
          success: true,
          message: "Success",
          returnuser,
        });
      });
    });
  } catch (error) {
    res.json({
      err: error,
    });
  }
};

controler.getalluser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({
      success: true,
      message: "Success",
      users,
    });
  } catch (error) {
    res.json({
      success: false,
      err: error,
    });
  }
};

module.exports = controler;
