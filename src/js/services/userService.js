'use strict';

app.service('users', function($resource){
	return $resource(appInfo.apiUrl + 'users/:id', {
		id: '@id'
	});
});