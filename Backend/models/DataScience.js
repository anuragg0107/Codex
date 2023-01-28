const mongoose = require('mongoose');

const DsSchema = mongoose.Schema({
    imgurl: {
        type: String,
    },
    title: {
        type: String,
    },
    university: {
        type: String,
    },
    education: {
        type: String,
    }
});

const DsData = mongoose.model('DsData', DsSchema);

module.exports = DsData;