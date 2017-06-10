var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {

	$routeProvider.
	when('/',{
		templateUrl:'views/content/home.html'

	}).
	when('/automated-gates',{
		templateUrl:'views/content/automated-gates.html'
	}).
	otherwise({
		redirectTo:'/'
	});
	
}])
