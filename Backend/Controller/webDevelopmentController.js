const webDevelopmentData = require('../models/webDevelopmentModel')

exports.getAllwebDevelopmentData = async (req, res) => {
    try {
        let wDData = await webDevelopmentData.find();

        res.status(200).json({
            status: "success",
            results: wDData.length,
            wDData
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}

exports.getSinglewebDevelopmentData = async (req, res) => {
    try {
        let data = await webDevelopmentData.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}