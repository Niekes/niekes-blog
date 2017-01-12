'use strict';

var app = new angular.module( 'app', ['ui.router', 'ngResource'] );

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state( 'list', {
			url: '/',
			controller: 'listCtrl',
			controllerAs: '$listCtrl',
			templateUrl: appInfo.templateDirectory + 'partials/list.html'
		})
		.state( 'detail', {
			url: '/posts/:slug',
			controller: 'detailCtrl',
			controllerAs: '$detailCtrl',
			templateUrl: appInfo.templateDirectory + 'partials/detail.html'
		})
});