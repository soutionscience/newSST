app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home',{
		url:'/',
		templateUrl:'views/content/home.html'
	})
	.state('automated-gates',{
		url:'/automated-gates',
		templateUrl:'views/content/automated-gates.html'
	})
		
	.state('fire-suppression',{
		url:'/fire-suppression',
		templateUrl:'views/content/fire-suppression-systems.html'
	})
	.state('cctv',{
		url:'/cctv',
		templateUrl:'views/content/cctv.html'
	}).state('alarms',{
		url:'/alarms',
		templateUrl:'views/content/alarms.html'
	}).state('access-control',{
		url:'/access-control',
		templateUrl:'views/content/access-control.html'

	}).state('careers',{
		url:'/careers',
		templateUrl:'views/content/careers.html'
	
	}).state('contact',{
		url:'/contact',
		templateUrl:'views/content/contact-us.html'
	})

	$locationProvider.html5Mode(true);
})