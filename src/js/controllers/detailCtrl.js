'use strict';

app.controller('detailCtrl', function($rootScope, $http, $stateParams, $q, posts, users) {

	$rootScope.isLoading = true;

	var $detailCtrl = this;

	posts.query({slug: $stateParams.slug}, function (res){
		$detailCtrl.post = res[0];
		var requests = [users.get({id: $detailCtrl.post.author})];

		$q.all(requests).then(function successCallback(res){
			$detailCtrl.author = res[1];
			$rootScope.isLoading = false;
		}).then(function(){
			$http.get(
				appInfo.apiUrl + 'editlink?post=' +
				$detailCtrl.post.id,
				{ headers: {'X-WP-Nonce': appInfo.nonce} }).then(function successCallback(res){
					$detailCtrl.post.editPostLink = res.data.editPostLink;
				});
		});
	});
});