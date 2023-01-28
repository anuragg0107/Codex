const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Register = (req, res) => {
    try {
        const { fullname, email, username, password, country } = req.body;

        bcrypt.hash(password, 5, async (err, cpassword) => {
            if (err) {
                res.status(400).json({
                    status: 'fail',
                    err,
                })
            } else {
                let newUser = await User.create({ fullname, username, email, password: cpassword, country });

                res.status(201).json({
                    status: "success",
                    newUser
                })
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}

exports.Login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const getUser = await User.find({ username });

        if (getUser.length > 0) {
            let user = getUser[0];

            bcrypt.compare(password, getUser[0].password, (err, result) => {
                if (result) {
                    let token = jwt.sign({ user }, process.env.KEY);

                    res.status(201).json({
                        status: "success",
                        user,
                        token
                    })
                } else {
                    res.status(400).json({
                        status: "fail",
                        message: "Wrong Credentials"
                    })
                }
            })
        }
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Wrong Credentials"
        })
    }
}