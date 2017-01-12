'use strict';

app.controller('listCtrl', function($rootScope, $state, $timeout, posts) {

	$rootScope.isLoading = true;
	$rootScope.delaying = false;

	var $listCtrl = this;

	$listCtrl.pageTitle = 'Blog Listing Page';

	posts.query(function(res) {
		$listCtrl.posts = res;
		$rootScope.isLoading = false;
	});

	$listCtrl.goToArticle = function(slug){
		$rootScope.delaying = true;
		$timeout(function () {
			$state.go('detail', {slug: slug});
    	}, 750);
	};
});