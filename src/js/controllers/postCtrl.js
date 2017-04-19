'use strict';

app.controller('postCtrl', function(DEFAULT, $rootScope, $filter, $http, $stateParams, $q, $window, $location, posts, users) {

	var $postCtrl = this;
	$postCtrl.footer = DEFAULT.FOOTER;

	// @todo implement search
	// var sr = posts.query({search: 'studium+informatik'});
	// console.info(sr);

	function init(){
		$rootScope.isLoading = true;
		posts.query({slug: $stateParams.slug}, function (res){

			var _keywords  = [];
			$postCtrl.post = res[0];

			$http.get(appInfo.apiUrl + 'tags').then(function successCallback(response){

				response.data.forEach(function(t){
					if($postCtrl.post.tags.indexOf(t.id) !== -1){
						_keywords.push(t.name);
					}
				});
				$rootScope.metaKeywords = _keywords.toString();
			});

			$rootScope.metaTitle 		= ' - ' + $postCtrl.post.title.rendered;
			$rootScope.metaCanonical 	= DEFAULT.CANONICAL + $postCtrl.post.link;
			$rootScope.metaDescription 	= $filter('plain')($postCtrl.post.excerpt.rendered);

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

	$postCtrl.shareOnFb = function(){
		$window.open('https://www.facebook.com/sharer/sharer.php?u=' + $location.$$host + $postCtrl.post.link + '&title=Niekes Blog' + $rootScope.metaTitle + '&description=' + $rootScope.metaDescription, 'facebook-share-dialog', 'width=626,height=436');
	};

	init();
});
