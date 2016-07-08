class PageController {

	constructor($scope, $http) {
		$scope.foo = 'bar';

		$scope.postIt = function() {

			$http({ method: 'POST', url: '/api/residents'}).then(function successCallback(response) {
				console.log(response);
			}, function errorCallback(response) {
				console.log(response);
			});
		};
	}

	// title () {
	// 	return 'Title: ' + this._title;
	// }
}
export { PageController };