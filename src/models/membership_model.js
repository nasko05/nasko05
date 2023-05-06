const mongoose = require('mongoose')

const Membership = mongoose.model('Membership', new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        default: 'Active'
    },
    credits: {
        type: Number,
        default: 0
    },
    start_date: {
        type: Date,
        default: Date.now()
    },
    end_date: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}))