
var app = angular.module("myApp", ['ngRoute', 'ui.router']);

app.config(['$routeProvider',function($routeProvider) {

	$routeProvider.
	when('/',{
		templateUrl:'views/content/home.html'

	}).
	when('/automated-gates',{
		templateUrl:'views/content/automated-gates.html'
	}).
		when('/fire-suppression',{
		templateUrl:'views/content/fire-suppression-systems.html'
	}).
		when('/cctv',{
		templateUrl:'views/content/cctv.html'
	}).
		when('/alarms',{
		templateUrl:'views/content/alarms.html'
	}).
		when('/access-control',{
		templateUrl:'views/content/access-control.html'
	}).
		when('/careers',{
		templateUrl:'views/content/careers.html'
	}).
			when('/contact',{
		templateUrl:'views/content/contact-us.html'
	}).
	otherwise({
		redirectTo:'/'
	});
	
}])
