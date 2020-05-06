const Task = require("../models/task.model");
const controler = {};

controler.getalltask = async (req, res, next) => {
  try {
    const owner = req.body.owner;
    const result = await Task.find({ owner });
    res.json({
      success: true,
      message: "get task",
      task: result,
    });
  } catch (error) {
    res.json({
      success: false,
      err: error,
    });
  }
};
controler.getTaskbyId = async (req, res, next) => {
  try {
    const idtask = req.params.id;
    const result = await Task.find({ _id: idtask });
    res.json({
      success: true,
      message: "get task",
      task: result,
    });
  } catch (error) {
    res.json({
      success: false,
      err: error,
    });
  }
};
controler.posttask = async (req, res, next) => {
  try {
    let task = new Task({
      name: req.body.name,
      done: req.body.done,
      dateTask: req.body.dateTask,
      desc: req.body.desc,
      owner: req.body.owner,
    });
    const result = await task.save();

    res.json({
      success: true,
      message: "Created Task",
      task: result,
    });
  } catch (error) {
    res.json({
      success: false,
      err: error,
    });
  }
};
controler.EditTask = async (req, res, next) => {
  try {
    const idtask = req.params.id;

    const result = await Task.updateOne(
      { _id: idtask },
      {
        $set: {
          name: req.body.name,
          done: req.body.done,
          dateTask: req.body.dateTask,
          desc: req.body.desc,
          owner: req.body.owner,
        },
      },
      (err, newtask) => {
        if (err) {
          res.json({ success: false, msg: "Failed to update task" });
        } else {
          res.json({ success: true, msg: "Updated Task" });
        }
      }
    );
  } catch (error) {
    res.json({
      success: false,
      err: error,
    });
  }
};
controler.deletetask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Task.deleteOne({ _id: id });
    res.json({
      success: true,
      message: "Deleted Task",
      task: result,
    });
  } catch (error) {
    res.json({
      success: false,
      err: error,
    });
  }
};

module.exports = controler;
