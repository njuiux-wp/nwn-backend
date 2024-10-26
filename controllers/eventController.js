const Event = require('../models/eventModel');

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).send('Error retrieving events');
    }
};

// Get event by ID
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).send('Event not found');
        res.json(event);
    } catch (err) {
        res.status(500).send('Error retrieving event');
    }
};

// Add new event
exports.addEvent = async (req, res) => {
    try {
        const { _id, ...eventData } = req.body; // Destructure to remove _id if present
        const newEvent = new Event(eventData);
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (err) {
        console.error('Error adding event:', err); // Log the error for debugging
        res.status(500).json({ message: 'Error adding event', error: err });
    }
};

// Update event
exports.updateEvent = async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedEvent) return res.status(404).send('Event not found');
        res.json(updatedEvent);
    } catch (err) {
        res.status(500).send('Error updating event');
    }
};

// Delete event
exports.deleteEvent = async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        if (!deletedEvent) return res.status(404).send('Event not found');
        res.send(`Event with id ${req.params.id} deleted`);
    } catch (err) {
        res.status(500).send('Error deleting event');
    }
};
