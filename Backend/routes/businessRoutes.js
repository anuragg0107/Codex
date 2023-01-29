const express = require('express');
const businessController = require('../Controller/businessController');

const { getAllbusinessData, getSingleBusinessData } = businessController;

const Router = express.Router();

Router.route('/').get(getAllbusinessData);
Router.route('/:id').get(getSingleBusinessData);

module.exports = Router