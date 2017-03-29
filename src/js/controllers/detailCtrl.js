'use strict';

app.controller('detailCtrl', function(DEFAULT, $rootScope, $http, $stateParams, $q, posts, users) {

	var $detailCtrl = this;
	$detailCtrl.footer = DEFAULT.FOOTER;

	// @todo implement search
	// var sr = posts.query({search: 'studium+informatik'});
	// console.log(sr);

	function init(){
		$rootScope.isLoading = true;
		posts.query({slug: $stateParams.slug}, function (res){
			$detailCtrl.post = res[0];
			$rootScope.metaTitle = ' - ' + $detailCtrl.post.title.rendered;
			$detailCtrl.author = users.get({id: $detailCtrl.post.author}, function(){
				$rootScope.isLoading = false;
			});
			$http.get(
					appInfo.apiUrl + 'editlink?post=' +
					$detailCtrl.post.id,
					{ headers: {'X-WP-Nonce': appInfo.nonce} }
				).then(function successCallback(res){
					$detailCtrl.post.editPostLink = res.data.editPostLink;
			});
		});
	}

	init();
});
