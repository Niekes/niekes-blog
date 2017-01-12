'use strict';

app.controller('listCtrl', function($rootScope, posts) {

	$rootScope.loadingStatus = true;

	var $listCtrl = this;

	$listCtrl.pageTitle = 'Blog Listing Page';

	posts.query(function(res) {
		$listCtrl.posts = res;
		$rootScope.loadingStatus = false;
	});

});