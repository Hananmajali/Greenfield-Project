var db = require('../config');
var mongoose = require('mongoose');



//create our movie model 
var moveListSchema = mongoose.Schema({
  title: { type: String, required: true,  unique: true }

});

var movieList = mongoose.model('movieList', moveListSchema);

module.exports = movieList;



