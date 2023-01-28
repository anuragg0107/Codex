const express = require('express');
const DSController = require('../Controller/DataScienceController');

const { getAllDSData } = DSController;

const Router = express.Router();

Router.route('/').get(getAllDSData);

module.exports = Router;