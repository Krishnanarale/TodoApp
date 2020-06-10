const mongoose = require('mongoose'); // Importing a require a mongoose module.

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/todo', {useNewUrlParser: true, useUnifiedTopology: true}) // Database name is todo.
    .then(() => console.log('Database Connected!'))
    .catch((error) => console.log(error));

module.exports = mongoose;