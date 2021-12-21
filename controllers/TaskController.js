const TaskModel = require('../models/TaskModel');

const taskCrud = {
  getAll: async (filter) => {
    const result = await TaskModel.find({ deleted: false, ...filter });
    return result;
  },

  getOneById: async (id) => {
    const result = await TaskModel.findById(id);
    return result;
  },

  updateOneById: async (id, data) => {
    const result = await TaskModel.findByIdAndUpdate(id, data, { new: true });
    return result;
  },

  deleteOneById: async (id, data) => {
    const result = await TaskModel.findByIdAndUpdate(id, data, { new: true });
    return result;
  },

  createOne: async (data) => {
    const result = await TaskModel.create(data);
    return result;
  },

  updateALL: async (data) => {
    const result = await TaskModel.updateMany({ deleted: false }, data, { new: true });
    return result;
  },
};

module.exports = taskCrud;
