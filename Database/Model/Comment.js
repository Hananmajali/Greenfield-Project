var db = require('../config');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var User=require('./User');
var Movie=require('./Movie');

//create our comment model 
var commentSchema = mongoose.Schema({
	id: Number,
	comment: { type: String, required: true },
	users:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
	movies:[{type:mongoose.Schema.Types.ObjectId,ref:'Movie'}]
});

var Comment = mongoose.model('Comment' , commentSchema);


module.exports = Comment;