// db/config.js

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gsx');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	console.log('Established connection to mongod.');
	console.warn('mongod is running withouth authentication.');
});
module.exports = db;

// {
// 	url : 'mongodb://localhost/gsx'
// };