const mongoose = require('mongoose');

const counter = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    }
})

const counterModel = mongoose.model('counter', counter);
module.exports = counterModel;