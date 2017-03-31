'use strict';

var app = new angular.module('app', ['ui.router', 'ngResource', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$urlRouterProvider.otherwise('/');

	console.log();

	$stateProvider
	.state('list', {
		url: '/',
		controller: 'listCtrl',
		controllerAs: '$listCtrl',
		templateUrl: appInfo.templateDirectory + 'partials/list.html'
	})
	.state('post', {
		url: '/posts/:slug/',
		controller: 'postCtrl',
		controllerAs: '$postCtrl',
		templateUrl: appInfo.templateDirectory + 'partials/post.html'
	});

	$locationProvider.html5Mode({
	    enabled: true,
	    requireBase: false,
	    rewriteLinks: false
	}).hashPrefix('!');

});
