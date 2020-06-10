// Getting mongoose instance to model
const mongoose = require('mongoose');

module.exports = mongoose.model('Task', new mongoose.Schema({
    'task': {
        type: String,
        trim: true
    }
}));