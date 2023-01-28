const express = require('express');
const AiController = require('../Controller/AiController');

const { getAllAiData } = AiController;

const Router = express.Router();

Router.route('/').get(getAllAiData);

module.exports = Router;