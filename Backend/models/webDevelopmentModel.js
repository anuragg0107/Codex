const mongoose = require('mongoose');

const webDevelopementSchema = mongoose.Schema({
    imgurl: {
        type: String,
    },
    title: {
        type: String,
    },
    university: {
        type: String,
    },
    webDevelopement: {
        type: String,
    }
});

const webDevelopementData = mongoose.model('webDevelopementData', webDevelopementSchema);

module.exports = webDevelopementData;