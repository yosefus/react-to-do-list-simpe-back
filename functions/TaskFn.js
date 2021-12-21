const {
  getOneById,
  deleteOneById,
  createOne,
  getAll,
  updateOneById,
  updateALL,
} = require('../controllers/TaskController');

const create = async (data) => {
  const { title } = data;
  if (!title) throw 'didnt find any title';
  const result = await createOne({ title });
  return result;
};

const get = async (req) => {
  const result = await getAll();
  return { tasks: result, token: req.token };
};

const update = async (id, data) => {
  if (!id || !data || data.isDone === undefined) throw 'something missing';
  const updateData = { isDone: data.isDone };
  const result = await updateOneById(id, updateData);
  return result;
};

const del = async (id) => {
  if (!id) throw 'something missing';
  const result = await updateOneById(id, { deleted: true });
  return result;
};

const delAll = async () => {
  const result = await updateALL({ deleted: true });
  return result;
};

const updateAll = async (data) => {
  if (data.isDone === undefined) throw 'missing data';
  const newData = { isDone: data.isDone };
  const result = await updateALL(newData);
  return result;
};

module.exports = { create, get, update, del, delAll, updateAll };
