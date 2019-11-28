const express = require('express');
const routes = express.Router();

const PersonController = require('../controllers/PersonController');
const VaccineController = require('../controllers/VaccineController');

routes.get('/person', PersonController.get);
routes.post('/person', PersonController.create);

routes.get('/vaccine', VaccineController.get);
routes.post('/vaccine', VaccineController.create);

module.exports = routes;
