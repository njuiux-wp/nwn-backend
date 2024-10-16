const Guest = require('../models/guestsModel');

// Get all guests
exports.getAllGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get guest by ID
exports.getGuestById = async (req, res) => {
  const { id } = req.params; // Get the ID from the request parameters
  try {
    const guest = await Guest.findById(id); // Fetch guest by ID
    if (!guest) {
      return res.status(404).json({ message: 'Guest not found' }); // Return 404 if not found
    }
    res.json(guest); // Return the guest details
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
};

// Get guests by category
exports.getGuestsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const guests = await Guest.find({ category });
    res.json(guests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new guest
exports.addGuest = async (req, res) => {
  const { name, familyMembers, roomNo, inviteStatus, category, locationName } = req.body;
  const newGuest = new Guest({ name, familyMembers, roomNo, inviteStatus, category, locationName });

  try {
    const savedGuest = await newGuest.save();
    res.status(201).json(savedGuest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a guest
exports.updateGuest = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedGuest = await Guest.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedGuest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove a guest
exports.deleteGuest = async (req, res) => {
  const { id } = req.params;
  try {
    await Guest.findByIdAndDelete(id);
    res.json({ message: 'Guest removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};