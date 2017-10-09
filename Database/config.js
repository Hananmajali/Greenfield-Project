var mongoose = require('mongoose');
var movieList = require("./Model/movieList.js")
var coverter = require("../convert.js").convertor;
mongoURI = 'mongodb://localhost/movies'; 
mongoose.connect(mongoURI);

// Run in seperate terminal window using 'mongod'

(function () {
	movieList.find().exec(function(err, data){
		if (data.length === 0) {
		console.log('data : ', data.length )
			for (var i = 0; i < coverter.length; i++) {
				var record = new movieList ({
					title:coverter[i].original_title,
				});

				record.save(function(error,result){
					if(error){console.log(error)}
						else{

						}
					})
			}

		}
	})
})();

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});
module.exports = db;

 
