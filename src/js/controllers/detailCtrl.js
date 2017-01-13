'use strict';

app.controller('detailCtrl', function($rootScope, $http, $stateParams, $q, users) {

	$rootScope.isLoading = true;

	var $detailCtrl = this;

	$http.get(appInfo.apiUrl + 'posts?filter[name]=' + $stateParams.slug).then(function successCallback(res){
		$detailCtrl.post = res.data[0];
		var requests = [
			users.get({id: $detailCtrl.post.author})
		];
		// @todo get editlink later
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