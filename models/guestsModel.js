const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    familyMembers: { type: Number, required: true },
    roomNo: { type: String, required: true },
    inviteStatus: { type: String, enum: ['pending', 'sent'], default: 'pending' },
    category: { type: String, enum: ['Niki', 'NJ'], required: true },
    locationName: { type: String, required: true }
});

module.exports = mongoose.model('Guest', guestSchema);
