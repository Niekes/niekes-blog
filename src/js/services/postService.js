'use strict';

app.service('posts', function($resource){
	return $resource(appInfo.apiUrl + 'posts/:id', {
		id: '@id'
	});
});