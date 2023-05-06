const mongoose = require('mongoose')
// Invoice model
const Invoice = mongoose.model('Invoice', new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "Outstanding"
    },
    description: {
        type: String,
        default: ""
    },
    amount: {
        type: Number,
        required: true
    },
    invoice_lines: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "InvoiceLine"
        }]
    }
}));