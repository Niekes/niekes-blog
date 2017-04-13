'use strict';

app.controller('postCtrl', function(DEFAULT, $rootScope, $http, $stateParams, $q, posts, users) {

	var $postCtrl = this;
	$postCtrl.footer = DEFAULT.FOOTER;

	// @todo implement search
	// var sr = posts.query({search: 'studium+informatik'});
	// console.info(sr);

	function init(){
		$rootScope.isLoading = true;
		posts.query({slug: $stateParams.slug}, function (res){

			var _keywords = [];
			$postCtrl.post = res[0];

			$http.get(appInfo.apiUrl + 'tags').then(function successCallback(response){

				response.data.forEach(function(t){
					if($postCtrl.post.tags.indexOf(t.id) !== -1){
						_keywords.push(t.name);
					}
				});
				$rootScope.metaKeywords = _keywords.toString();
			});


			$rootScope.metaTitle = ' - ' + $postCtrl.post.title.rendered;
			$postCtrl.author = users.get({id: $postCtrl.post.author}, function(){
				$rootScope.isLoading = false;
			});

			$http.get(
					appInfo.apiUrl + 'editlink?post=' +
					$postCtrl.post.id,
					{ headers: {'X-WP-Nonce': appInfo.nonce} }
				).then(function successCallback(res){
					$postCtrl.post.editPostLink = res.data.editPostLink;
			});
		});
	}

	init();
});
