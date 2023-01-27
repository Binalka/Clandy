const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerDetailsSchema = new Schema({
    offer: {
        type: String,
        required: true
    },
    discount: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('offerdetail', offerDetailsSchema);