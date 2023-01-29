const UserData = require('../models/UserDataModel');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

exports.UserData = async (req, res) => {
    try {
        let details = await UserData.create(req.body);

        res.json(201).json({
            status: "success",
            details
        })

    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}