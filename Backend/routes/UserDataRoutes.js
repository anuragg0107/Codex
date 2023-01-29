const express = require('express');
const UserDataController = require('../Controller/UserDataController');

const { UserData } = UserDataController;


const Router = express.Router();

Router.route('/').post(UserData);

module.exports = Router;