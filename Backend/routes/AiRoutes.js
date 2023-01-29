const express = require('express');
const AiController = require('../Controller/AiController');

const { getAllAiData, getSingleAiData } = AiController;

const Router = express.Router();

Router.route('/').get(getAllAiData);
Router.route('/:id').get(getSingleAiData)

module.exports = Router;