const mongoose = require('mongoose');

const CombinedSchema = mongoose.Schema({
    imgurl: {
        type: String,
    },
    title: {
        type: String,
    },
    category: {
        type: String
    },
    university: {
        type: String,
    },
    education: {
        type: String,
    }
});

const CombinedData = mongoose.model('CombinedData', CombinedSchema);

module.exports = CombinedData;