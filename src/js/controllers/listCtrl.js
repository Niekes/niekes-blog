'use strict';

app.controller('listCtrl', function(DEFAULT, $rootScope, $state, posts) {

	var $listCtrl = this;

	$listCtrl.posts = posts.query();

	$listCtrl.footer = DEFAULT.FOOTER;

});