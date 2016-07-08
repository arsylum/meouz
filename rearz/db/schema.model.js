// grab the mongoose module
var mongoose = require('mongoose');

var resident = new mongoose.Schema({
	name: { type: String, default: 'anonymous'},
	// room
	balance: { type: Number, default: 0},
	movedIn: { type: Date, default: null},
	movedOut: { type: Date, default: null }

});

var task = new mongoose.Schema({
	name: { type: String, default: ''},
	description: {type: String, default: ''},
	priceHistory: {type: Array, default: []},
	bids: {type: Array, default: []}
});

var auction = new mongoose.Schema({
	openDate: { type: Date, default: null},
	closeDate: { type: Date, default: null},
	dueDate: { type: Date, default: null}
});

module.exports = {
	resident: 	mongoose.model('Resident', resident),
	task:		mongoose.model('Task', task),
	auction:	mongoose.model('Auction', auction)
};