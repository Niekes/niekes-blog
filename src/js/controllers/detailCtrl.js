'use strict';

app.controller('detailCtrl', function($rootScope, $http, $stateParams, $q, posts, users) {

	var $detailCtrl = this;

	// @todo implement search
	// var sr = posts.query({search: 'studium+informatik'});
	// console.log(sr);

	posts.query({slug: $stateParams.slug}, function (res){
		$detailCtrl.post = res[0];
		$detailCtrl.author = users.get({id: $detailCtrl.post.author});
		$http.get(
				appInfo.apiUrl + 'editlink?post=' +
				$detailCtrl.post.id,
				{ headers: {'X-WP-Nonce': appInfo.nonce} }
			).then(function successCallback(res){
				$detailCtrl.post.editPostLink = res.data.editPostLink;
		});
	});
});