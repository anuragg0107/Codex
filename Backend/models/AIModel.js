const mongoose = require('mongoose');

const AiSchema = mongoose.Schema({
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

const AiData = mongoose.model('AiData', AiSchema);

module.exports = AiData;