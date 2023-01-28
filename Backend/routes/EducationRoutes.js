const express = require('express');
const educationController = require('../Controller/EducationController');

const { getAllEducationData } = educationController;

const Router = express.Router();

Router.route('/').get(getAllEducationData);

module.exports = Router;