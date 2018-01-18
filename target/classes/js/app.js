angular.module('app', ['ngRoute', 'controller'])

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/home.html'
	})
	.when('/progetti', {
		templateUrl: 'templates/progetti.html',
		controller: 'BlogCtrl'
	})
	.when('/risorse', {
		templateUrl: 'templates/risorse.html',
		controller: 'ResCtrl'
	})
	.otherwise({
		templateUrl: 'templates/404.html'
	})
})
