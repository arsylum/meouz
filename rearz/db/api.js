var dbModels = require('./schema.model');


module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// sample api route
	app.get('/api/residents', function(req, res) {


		
		// use mongoose to get all residents
		dbModels.resident.find(function(err, resp) {

			// if there is an error retrieving, send the error. 
			// nothing after res.send(err) will execute
			if (err) { res.send(err); }

			res.json(resp); // return all nerds in JSON format
		});
	});

	app.post('/api/residents', function(req, resp) {
		console.log(req);

		var newResident = new dbModels.resident({name: 'spice'});
		newResident.save();

		resp.json(false);

	});

		// route to handle creating goes here (app.post)
	// route to handle delete goes here (app.delete)
};