const mongoose = require('mongoose');
const Vaccine = mongoose.model('Vaccine');

const create = async (req, res) => {
  try {
    const { body } = req;
    const vaccine = await Vaccine.create(body);
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};

const get = async (req, res) => {
  const vaccines = await Vaccine.find();
  return res.json(vaccines);
};

const update = async (req, res) => {
  try {
    const {
      body: { id, ...body }
    } = req;
    await Vaccine.update({ _id: id }, body);
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};

const destroy = async (req, res) => {
  try {
    const {
      query: { id }
    } = req;
    await Vaccine.remove({ _id: id });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};

module.exports = {
  create,
  get,
  update,
  destroy
};
