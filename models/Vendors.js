const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    totalPayment: {
        type: Number,
        required: true,
    },
    depositPaid: {
        type: Number,
        required: true,
    },
    depositDate: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Vendor', vendorSchema);