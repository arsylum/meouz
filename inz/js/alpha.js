
// require('bootstrap'); NOTE include needed parts on demand
require('./main.js');
require('./controller.js');
angular.element(document).ready(function () {
	angular.bootstrap( document, ['meawn'], {strictDi: true } );
});