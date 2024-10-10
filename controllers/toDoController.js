const ToDo = require('../models/toDoModel');

// Get all ToDos
exports.getToDos = async (req, res) => {
    try {
        const todos = await ToDo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single ToDo by ID
exports.getToDo = async (req, res) => {
    try {
        const todo = await ToDo.findById(req.params.id);
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({ message: 'ToDo not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new ToDo
exports.addToDo = async (req, res) => {
    const todo = new ToDo(req.body);
    try {
        const newToDo = await todo.save();
        res.status(201).json(newToDo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a ToDo
exports.updateToDo = async (req, res) => {
    try {
        const updatedToDo = await ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedToDo) {
            res.json(updatedToDo);
        } else {
            res.status(404).json({ message: 'ToDo not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a ToDo
exports.deleteToDo = async (req, res) => {
    try {
        const todo = await ToDo.findByIdAndDelete(req.params.id);
        if (todo) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'ToDo not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};