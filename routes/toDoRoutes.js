const express = require('express');
const router = express.Router();
const toDoController = require('../controllers/toDoController.js');

router.get('/', toDoController.getToDos);
router.get('/:id', toDoController.getToDo);
router.post('/', toDoController.addToDo);
router.put('/:id', toDoController.updateToDo);
router.delete('/:id', toDoController.deleteToDo);

module.exports = router;
