///////////////
/// main.js //
/////////////
var angular = require('angular');
require('angular-route');

import { PATHS } from './globalz.js';

angular.module('meawn',['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {templateUrl: PATHS.views + 'main.htm'})
			.otherwise({redirectTo: '/'});
	}]);


import { PageController } from './controller.js';
PageController.$inject = ['$scope', '$http'];
angular.module('meawn').controller('TestController', PageController);

// 	'TestController', ['$scope', function($scope) {
// 	$scope.var = 'somevallue';
// 	console.log('controller initializized');
// 	console.log($scope);
// }]);