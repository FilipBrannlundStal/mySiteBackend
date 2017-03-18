var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json())

About = require('./models/about');

// Connect to mongoose
mongoose.connect('mongodb://localhost/personalsite');
var db = mongoose.connection;

app.get('/', function(req, res) {
  res.send('Please use /api/persite');
});

app.get('/api/about', function (req, res) {
  About.getAbout(function (err, about) {
    if(err) {
      throw err;
    }
    res.json(about);
  });
});

app.post('/api/about', function (req, res) {
  var about = req.body;
  About.addAbout(about, function (err, about) {
    if(err) {
      throw err;
    }
    res.json(about);
  });
});

app.put('/api/about/:id', function (req, res) {
  var id = req.params.id;
  var about = req.body;
  About.updateAbout(id, about, {}, function (err, about) {
    if(err) {
      throw err;
    }
    res.json(about);
  });
});

app.listen(3000);
console.log('Running on port 3000');
