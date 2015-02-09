'use strict';
var app = ('personalApi');

app.service('mahservice', function($http, $q) {
	this.getMahName = function() {
		var deferred = $q.defer();

		$http({
			method: 'GET'
		})
	}
})