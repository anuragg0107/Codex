const AiData = require('../models/AIModel');

exports.getAllAiData = async (req, res) => {
    try {
        let aidata = await AiData.find();

        res.status(200).json({
            status: "success",
            results: aidata.length,
            aidata
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}