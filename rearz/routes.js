 // rearz/routes.js

// grab the nerd model we just created


module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	require('./db/api.js')(app);


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendFile('./ouz/index.html', {
			root: __dirname + '/../'}
		); // load frontend which will be controlled by angular
	});

};
