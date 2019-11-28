const mongoose = require('mongoose');
const Person = mongoose.model('Person');

const create = async (req, res) => {
  try {
    const { body } = req;
    const vaccine = await Person.create(body);
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};

const get = async (req, res) => {
  const consults = await Person.find();
  return res.json(consults);
};

// const update = async (req, res) => {
//   try {
//     const {
//       body: { id, ...body }
//     } = req;
//     await Person.update({ idConsult: id }, body);
//     return res.sendStatus(200);
//   } catch (error) {
//     return res.sendStatus(400);
//   }
// };

// const destroy = async (req, res) => {
//   try {
//     const {
//       query: { id }
//     } = req;
//     await Person.remove({ idConsult: id });
//     return res.sendStatus(200);
//   } catch (error) {
//     return res.sendStatus(400);
//   }
// };

module.exports = {
  create,
  get
};
