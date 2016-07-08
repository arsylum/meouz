 // rearz/routes.js

// grab the nerd model we just created
var Resident = require('./db/resident.model');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// sample api route
	app.get('/api/residents', function(req, res) {
		// use mongoose to get all residents
		Resident.find(function(err, resp) {

			// if there is an error retrieving, send the error. 
			// nothing after res.send(err) will execute
			if (err) { res.send(err); }

			res.json(resp); // return all nerds in JSON format
		});
	});

	// route to handle creating goes here (app.post)
	// route to handle delete goes here (app.delete)

	// frontend routes =========================================================
	// route to handle all angular requests

	var ouz = [ // explicitly serve all assets needed to get angular going?
		'haz/js/main.js',
		'haz/css/main.css',
		'*'
	];

	for(let o of ouz) {
		let f = o;
		console.log('registering /' + o);
		switch(o) {
		case '*': f = 'index.html';
		}
		app.get('/' + o, function(req,res) {
			res.sendFile('./ouz/' + f, { root: __dirname + '/../' });
		});
	}
	// app.get('*', function(req, res) {
	// 	res.sendFile('./ouz/index.html', {
	// 		root: __dirname + '/../'}
	// 	); // load frontend which will be controlled by angular
	// });

};
