'use strict';

app.controller('detailCtrl', function($scope, $rootScope, $http, $stateParams, $q) {
	$rootScope.loadingStatus = true;
	var $detailCtrl = this;
	var requests = [
		$http.get(appInfo.apiUrl + 'posts?filter[name]=' + $stateParams.slug)
	];


	$q.all(requests).then(function successCallback(res){
		$detailCtrl.post = res[0].data[0];
	}).then(function(){
		$http.get(
			appInfo.apiUrl + 'editlink?post=' + $detailCtrl.post.id,
			{ headers: {'X-WP-Nonce': appInfo.nonce} }
		).then(function successCallback(res){
			$detailCtrl.post.editPostLink = res.data.editPostLink;
		});
		$rootScope.loadingStatus = false;
	});
});