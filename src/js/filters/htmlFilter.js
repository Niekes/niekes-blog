app.filter('trusted', function($sce){
	return function(text){
		return $sce.trustAsHtml(text);
	}
});