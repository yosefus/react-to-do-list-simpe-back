const express = require('express');
const router = express.Router();
const { create, get, update, del, delAll, updateAll } = require('./functions/TaskFn');
const { checkToken, createToken } = require('./middleware/browser');

router.get('/task', [createToken], async (req, res) => {
  try {
    const result = await get(req);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message || error);
  }
});

router.post('/task', [checkToken], async (req, res) => {
  const data = req.body;
  try {
    const result = await create(data);
    res.send(result);
  } catch (error) {
    res.send(error.message || error);
  }
});

router.put('/task/:id', [checkToken], async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  try {
    const result = await update(id, data);
    res.send(result);
  } catch (error) {
    res.send(error.message || error);
  }
});

router.delete('/task/:id', [checkToken], async (req, res) => {
  const id = req.params.id;
  try {
    const result = await del(id);
    res.send(result);
  } catch (error) {
    res.send(error.message || error);
  }
});

router.delete('/tasks/all', [checkToken], async (req, res) => {
  try {
    const result = await delAll();
    res.send(result);
  } catch (error) {
    res.send(error.message || error);
  }
});

router.put('/tasks/all', [checkToken], async (req, res) => {
  const data = req.body;
  try {
    const result = await updateAll(data);
    res.send(result);
  } catch (error) {
    res.send(error.message || error);
  }
});

router.get('/check', async (req, res) => {
  try {
    res.send('result');
  } catch (error) {
    res.status(500).send(error.message || error);
  }
});

module.exports = router;
