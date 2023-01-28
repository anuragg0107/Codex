const express = require('express');
const webDevelopmentController = require('../Controller/webDevelopmentController');

const { getAllwebDevelopmentData } = webDevelopmentController;

const Router = express.Router();

Router.route('/').get(getAllwebDevelopmentData);

module.exports = Router;