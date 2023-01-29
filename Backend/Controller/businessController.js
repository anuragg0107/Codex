const businessData = require('../models/businessModel');

exports.getAllbusinessData = async (req, res) => {
    try {
        let businessdata = await businessData.find();
        console.log(businessData)
        res.status(200).json({
            status: "success",
            results: businessdata.length,
            businessdata
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}

exports.getSingleBusinessData = async (req, res) => {
    try {
        let data = await businessData.findById(req.params.id);

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