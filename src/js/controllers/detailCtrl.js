'use strict';

app.controller('detailCtrl', function($rootScope, $http, $stateParams, $q, users) {

	$rootScope.isLoading = true;

	var $detailCtrl = this;

	$http.get(appInfo.apiUrl + 'posts?filter[name]=' + $stateParams.slug).then(function successCallback(res){
		$detailCtrl.post = res.data[0];
		var requests = [
			$http.get(appInfo.apiUrl + 'editlink?post=' + $detailCtrl.post.id, { headers: {'X-WP-Nonce': appInfo.nonce} }),
			users.get({id: $detailCtrl.post.author})
		];
		$q.all(requests).then(function successCallback(res){
			$detailCtrl.post.editPostLink = res[0].data.editPostLink;
			$detailCtrl.author = res[1];
			$rootScope.isLoading = false;
		});
	});
});