const DsData = require('../models/DataScience');

exports.getAllDSData = async (req, res) => {
    try {
        let dsdata = await DsData.find();

        res.status(200).json({
            status: "success",
            results: dsdata.length,
            dsdata
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}

exports.getSingleDSData = async (req, res) => {
    try {
        let data = await DsData.findById(req.params.id);

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