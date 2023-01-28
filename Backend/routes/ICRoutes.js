const express = require('express');
const ICController = require('../Controller/IC');

const { getAllICData } = ICController;

const Router = express.Router();

Router.route('/').get(getAllICData);

module.exports = Router;