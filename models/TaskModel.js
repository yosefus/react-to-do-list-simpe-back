const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  isDone: { type: Boolean, default: false },
  createDate: { type: Date, default: new Date() },
  deleted: { type: Boolean, default: false },
});

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;
