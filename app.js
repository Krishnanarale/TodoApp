// Importing a express object in app.js
const express = require('express');
require('./config/mongoose');
const welcomeController = require('./controllers/welcomeController'); // Importing a welcome controller.
const bodyParser = require('body-parser'); // Iporting bodyParser module.
// Creating a app object from express module.
const app = express();

// Setting a view template engine for view files.
app.set('view engine', 'ejs');

// Serving static files.
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

welcomeController(app);

app.listen(3000);