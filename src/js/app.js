'use strict';

var app = new angular.module('app', ['ui.router', 'ngResource', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('list', {
        url: '/',
        controller: 'listCtrl',
        controllerAs: '$listCtrl',
        templateUrl: appInfo.templateDirectory + 'partials/list.html',
        data: {
            keywords: ['Niekes Blog, Niekes, Berlin, Software, Developer, Javascript, Softwareentwickler, Webentwickler, Progamming, Programmieren, Entwickler, Javascript, PhP, Python, Java, AngularJS']
        }
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
    });
});

app.run(function($window, $rootScope, $location){

    $window.ga('create', 'UA-70846886-2', 'auto');

    $rootScope.$on('$stateChangeSuccess', function () {

        $window.ga('send', 'pageview', $location.path());

    });

});
