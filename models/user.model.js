const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    unique: true,
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return res.send(err);
    }
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) {
        return res.send(err);
      }
      this.password = hash;
      next();
    });
  });
});
userSchema.methods.ispasswordmatch = function (password, hashed, callback) {
  bcrypt.compare(password, hashed, (err, success) => {
    if (err) {
      return res.send(err);
    }
    callback(null, success);
  });
};

module.exports = mongoose.model("User", userSchema);
