const express = require('express');
const businessController = require('../Controller/businessController');

const { getAllbusinessData } = businessController;

const Router = express.Router();

Router.route('/').get(getAllbusinessData);

module.exports = Router