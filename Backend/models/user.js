const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    location: {type: Number, required: true}
});

module.exports = mongoose.model('User', UserSchema);