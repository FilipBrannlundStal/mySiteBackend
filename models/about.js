var mongoose = require('mongoose');

// About Schema
var aboutSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var About = module.exports = mongoose.model('About', aboutSchema, 'about');

// Get About
module.exports.getAbout = function (callback, limit){
  About.find(callback).limit(limit);
}


// Add About
module.exports.addAbout = function (about, callback){
  About.create(about, callback);
}

// Update About
module.exports.updateAbout = function (id, about, options, callback){
  var query = {_id: id};
  var update = {
    name: about.name
  }
  About.findOneAndUpdate(query, update, options, callback);
}
