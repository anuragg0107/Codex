const express = require('express');
const combinedController = require('../Controller/CombinedController');

const { getAllCombinedData, getFilteredData } = combinedController;

const Router = express.Router();

Router.route('/').get(getAllCombinedData);
Router.route('/filter').get(getFilteredData);

module.exports = Router;