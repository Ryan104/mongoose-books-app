var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

// index.js - require all the models and export them as a single module
// requiring '/models' will automaticall grab this file (index.js)
module.exports.Book = require('./book');
