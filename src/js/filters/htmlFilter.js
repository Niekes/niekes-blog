'use strict';

app.filter('trusted', function($sce){
	return function(text){
		return $sce.trustAsHtml(text);
	};
});

app.filter('plain', function(){
	return function(text){
		return text ? String(text).replace(/<[^>]+>/gm, '') : '';
	};
});
