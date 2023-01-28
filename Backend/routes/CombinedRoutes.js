const express = require('express');
const combinedController = require('../Controller/CombinedController');

const { getAllCombinedData } = combinedController;

const Router = express.Router();

Router.route('/').get(getAllCombinedData);

module.exports = Router;