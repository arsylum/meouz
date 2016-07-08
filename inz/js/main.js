///////////////
/// main.js //
/////////////
//import angular from 'angular'; 
require('angular');
require('angular-route');

angular.module('meawn',['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {templateUrl: '/haz/drafz/main.htm'})
			.otherwise({redirectTo: '/'});
	}]);


import { PageController } from './controller.js';
PageController.$inject = ['$scope'];
angular.module('meawn').controller('TestController', PageController);

// 	'TestController', ['$scope', function($scope) {
// 	$scope.var = 'somevallue';
// 	console.log('controller initializized');
// 	console.log($scope);
// }]);