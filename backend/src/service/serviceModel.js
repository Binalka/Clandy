const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appoinmentSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    persons: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('service', appoinmentSchema);