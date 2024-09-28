const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Define your route
router.get('/', (req, res) => {
    res.send('Guests route is working!'); // This will respond when accessing /guests
});

// Routes for locations
router.get('/', locationController.getAllLocations);
router.get('/:id', locationController.getLocationById);
router.post('/', locationController.addLocation);
router.put('/:id', locationController.updateLocation);
router.delete('/:id', locationController.deleteLocation);

module.exports = router;
