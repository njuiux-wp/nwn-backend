const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/todo.json');

// Get all ToDos
const getToDos = (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data' });
        res.json(JSON.parse(data));
    });
};

// Add a new ToDo
const addToDo = (req, res) => {
    const newToDo = { id: Date.now(), ...req.body };

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data' });

        const todos = JSON.parse(data);
        todos.push(newToDo);

        fs.writeFile(dataPath, JSON.stringify(todos, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Failed to save data' });
            res.status(201).json(newToDo);
        });
    });
};

// Update a ToDo
const updateToDo = (req, res) => {
    const { id } = req.params;

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data' });

        let todos = JSON.parse(data);
        const index = todos.findIndex(todo => todo.id == id);

        if (index === -1) return res.status(404).json({ error: 'ToDo not found' });

        todos[index] = { ...todos[index], ...req.body };

        fs.writeFile(dataPath, JSON.stringify(todos, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Failed to save data' });
            res.json(todos[index]);
        });
    });
};

// Delete a ToDo
const deleteToDo = (req, res) => {
    const { id } = req.params;

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data' });

        let todos = JSON.parse(data);
        todos = todos.filter(todo => todo.id != id);

        fs.writeFile(dataPath, JSON.stringify(todos, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Failed to save data' });
            res.status(204).send();
        });
    });
};

// Get a single ToDo by ID
const getToDo = (req, res) => {
    const { id } = req.params;
    
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data' });

        const todos = JSON.parse(data);
        const todo = todos.find(todo => todo.id == id);
        
        if (!todo) return res.status(404).json({ error: 'ToDo not found' });
        
        res.json(todo);
    });
};


module.exports = {
    getToDos,
    addToDo,
    updateToDo,
    deleteToDo,
    getToDo
};
