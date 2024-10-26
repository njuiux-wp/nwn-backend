const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: String,
    totalAmount: Number,
    totalRooms: Number,
    totalHalls: Number,
    perDayRoomPrice: Number,
    perDayHallPrice: Number,
    options: {
        chairs: Boolean,
        beds: Boolean,
        decorations: Boolean,
        foods: Boolean
    }
});

const Location = mongoose.model('Location', locationSchema, 'locations'); // Explicitly specify collection name

module.exports = Location;
