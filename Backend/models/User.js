const { Schema, model } = require('mongoose');

const userData = model("User", new Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
}))

module.exports = userData;