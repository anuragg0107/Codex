const mongoose = require('mongoose');

const UserDataSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        // unique: [true, 'A User must have unique email'],
        require: true
    }
});

const UserData = mongoose.model('UserData', UserDataSchema);

module.exports = UserData;