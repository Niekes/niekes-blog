'use strict';

app.controller('listCtrl', function(DEFAULT, $rootScope, $state, posts) {

	var $listCtrl = this;

	function init(){
		$rootScope.isLoading = DEFAULT.BOOLEAN.TRUE;
		$listCtrl.footer = DEFAULT.FOOTER;
		$listCtrl.posts = posts.query(function(){
			$rootScope.isLoading = DEFAULT.BOOLEAN.FALSE;
		});
	}

	init();

});