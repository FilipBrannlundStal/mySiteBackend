var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to mongoose
mongoose.connect('mongodb://localhost/personalsite');
var db = mongoose.connection;

app.get('/', function(req, res) {
  res.send('Hello');
});

app.listen(3000);
console.log('Running on port 3000');
