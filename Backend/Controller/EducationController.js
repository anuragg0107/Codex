const educationData = require('../models/Education')

exports.getAllEducationData = async (req, res) => {
    try {
        let eduData = await educationData.find();

        res.status(200).json({
            status: "success",
            results: eduData.length,
            eduData
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}