const mongoose = require('mongoose')

const InvoiceLine = mongoose.model('InvoiceLine', new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    amount: {
        type: Number,
        required: true
    },
    invoice: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Invoice'
    }
}));