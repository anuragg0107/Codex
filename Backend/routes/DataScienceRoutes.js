const express = require('express');
const DSController = require('../Controller/DataScienceController');

const { getAllDSData, getSingleDSData } = DSController;

const Router = express.Router();

Router.route('/').get(getAllDSData);
Router.route('/:id').get(getSingleDSData);

module.exports = Router;