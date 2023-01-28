const ICData = require('../models/IC');

exports.getAllICData = async (req, res) => {
    try {
        let icdata = await ICData.find();

        res.status(200).json({
            status: "success",
            results: icdata.length,
            icdata
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}