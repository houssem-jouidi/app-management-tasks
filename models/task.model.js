const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
  },
  dateTask: {
    type: Date,
  },
  desc: {
    type: String,
  },
  owner: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("task", taskSchema);
