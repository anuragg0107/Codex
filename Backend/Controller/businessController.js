const businessData = require('../models/businessModel');

exports.getAllbusinessData = async (req, res) => {
    try {
        let businessdata = await businessData.find();

        res.status(200).json({
            status: "success",
            results: businessdata.length,
            businessData
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}