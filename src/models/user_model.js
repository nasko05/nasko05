const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const User = mongoose.model('User', new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}))