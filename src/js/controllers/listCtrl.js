'use strict';

app.controller('listCtrl', function($rootScope, $state, posts) {

	var $listCtrl = this;

	$listCtrl.posts = posts.query();

});