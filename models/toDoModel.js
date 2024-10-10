const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Pending', 'Completed'],
        required: true,
    }
});

module.exports = mongoose.model('ToDo', toDoSchema);
