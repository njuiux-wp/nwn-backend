const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: String,
    fromDate: Date,
    perDayPrice: Number,
    depositPaid: Number,
    options: {
        chairs: Boolean,
        beds: Boolean,
        decorations: Boolean,
        foods: Boolean
    }
});

const Location = mongoose.model('Location', locationSchema, 'locations'); // Explicitly specify collection name

module.exports = Location;
