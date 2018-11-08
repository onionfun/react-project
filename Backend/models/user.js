const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    location: {type: Number, required: true},
    loggedIn: Boolean,
});

module.exports = mongoose.model('User', UserSchema);