const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventTime: { type: String, required: true } 
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
