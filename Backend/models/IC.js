const mongoose = require('mongoose');

const ICSchema = mongoose.Schema({
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

const ICData = mongoose.model('ICData', ICSchema);

module.exports = ICData;