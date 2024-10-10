const fs = require('fs');
const path = require('path');

// Path to the locations JSON file
// const dataPath = path.join(__dirname, '../data/locations.json');
const Location = require('../models/Location');

// Get all locations
exports.getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find();
        res.json(locations);
    } catch (err) {
        res.status(500).send('Error retrieving locations');
    }
};

// Get location by ID
exports.getLocationById = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);
        if (!location) return res.status(404).send('Location not found');
        res.json(location);
    } catch (err) {
        res.status(500).send('Error retrieving location');
    }
};

// Add new location
exports.addLocation = async (req, res) => {
    const newLocation = new Location(req.body);
    try {
        const savedLocation = await newLocation.save();
        res.status(201).json(savedLocation);
    } catch (err) {
        res.status(500).send('Error adding location');
    }
};

// Update location
exports.updateLocation = async (req, res) => {
    try {
        const updatedLocation = await Location.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedLocation) return res.status(404).send('Location not found');
        res.json(updatedLocation);
    } catch (err) {
        res.status(500).send('Error updating location');
    }
};

// Delete location
exports.deleteLocation = async (req, res) => {
    try {
        const deletedLocation = await Location.findByIdAndDelete(req.params.id);
        if (!deletedLocation) return res.status(404).send('Location not found');
        res.send(`Location with id ${req.params.id} deleted`);
    } catch (err) {
        res.status(500).send('Error deleting location');
    }
};
