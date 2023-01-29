const express = require('express');
const combinedController = require('../Controller/CombinedController');

const { getAllCombinedData, getFilteredData, getSingleCombinedData } = combinedController;

const Router = express.Router();

Router.route('/').get(getAllCombinedData);
Router.route('/filter').get(getFilteredData);
Router.route('/:id').get(getSingleCombinedData);

module.exports = Router;