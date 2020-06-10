module.exports = function(app) {
    const Task = require('../models/task');
    app.get('/', function(req, res) {
        Task.find({})
        .then((result) => res.render('welcome', {data: result}))
        .catch((error) => console.log(error));
    });

    app.post('/addTask', function(req, res) {
        (new Task(req.body))
        .save()
        .then((result) => res.send({ 'status': 'success', 'data': result}))
        .catch((error) => res.send({ 'status': 'failed', 'error': error}));
    });

    app.delete('/deleteTask', function(req, res) {
        Task.findByIdAndDelete(req.body.id)
        .then((result) => res.send({ 'status': 'success', 'data': result}))
        .catch((error) => res.send({ 'status': 'failed', 'error': error}));
    });
};