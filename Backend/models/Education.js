const mongoose = require('mongoose');

const educationSchema = mongoose.Schema({
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

const educationData = mongoose.model('educationData', educationSchema);

module.exports = educationData;