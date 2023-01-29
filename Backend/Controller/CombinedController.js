const CombinedData = require('../models/Combined');

exports.getAllCombinedData = async (req, res) => {
    try {
        let combineddata = await CombinedData.find();

        res.status(200).json({
            status: "success",
            results: combineddata.length,
            combineddata
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}

exports.getFilteredData = async (req, res) => {
    try {
        let combineddata = await CombinedData.find(req.query);

        res.status(200).json({
            status: "success",
            results: combineddata.length,
            combineddata
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}

exports.getSingleCombinedData = async (req, res) => {
    try {
        let data = await CombinedData.findById(req.params.id);

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