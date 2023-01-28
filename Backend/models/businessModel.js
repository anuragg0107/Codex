const mongoose = require('mongoose');

const businessSchema = mongoose.Schema({
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

const businessData = mongoose.model('businessData', businessSchema);

module.exports = businessData;