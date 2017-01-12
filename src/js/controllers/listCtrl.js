'use strict';

app.controller('listCtrl', function($rootScope, $state, posts) {

	$rootScope.isLoading = true;

	var $listCtrl = this;

	$listCtrl.pageTitle = 'Blog Listing Page';

	posts.query(function(res) {
		$listCtrl.posts = res;
		$rootScope.isLoading = false;
	});
});