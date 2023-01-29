const express = require('express');
const webDevelopmentController = require('../Controller/webDevelopmentController');

const { getAllwebDevelopmentData, getSinglewebDevelopmentData } = webDevelopmentController;

const Router = express.Router();

Router.route('/').get(getAllwebDevelopmentData);
Router.route('/:id').get(getSinglewebDevelopmentData);

module.exports = Router;