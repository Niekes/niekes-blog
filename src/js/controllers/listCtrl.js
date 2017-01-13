'use strict';

app.controller('listCtrl', function($rootScope, $state, posts) {

	var $listCtrl = this;

	$listCtrl.pageTitle = 'Blog Listing Page';

	posts.query(function(res) {
		$listCtrl.posts = res;
	});
});