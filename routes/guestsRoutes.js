const express = require('express');
const router = express.Router();
const guestsController = require('../controllers/guestsController');

router.get('/', guestsController.getAllGuests);
router.get('/:id', guestsController.getGuestById);
router.get('/:category', guestsController.getGuestsByCategory);
router.post('/', guestsController.addGuest);
router.put('/:id', guestsController.updateGuest);
router.delete('/:id', guestsController.deleteGuest);

module.exports = router;