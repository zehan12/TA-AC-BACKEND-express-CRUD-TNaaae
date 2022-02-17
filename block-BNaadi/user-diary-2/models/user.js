var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, require: true },
    email: String,
    age: Number,
    bio: String
});

module.exports = mongoose.models( "User", UserSchema );