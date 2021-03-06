angular.module('miApp').factory('personasDAO', [ '$http', function($http) {
	var baseUrl = 'ws/personas';
	return {
		query : function() { 
			return $http.get(baseUrl + '.json'); 
		},
		get : function(id) { 
			return $http.get(baseUrl + '/' + id  + '.json'); 
		},
		add : function(item) { 
			return $http.post(baseUrl + '/', item); 
		},
		change : function(id, item) {
			return $http.put(baseUrl + '/' + id, item); 
		},
		remove : function(id) {
			return $http.delete(baseUrl + '/' + id);
		}
	};
}]);
angular.module('miApp').factory('Auth', [ function() {
	return {
		usr: '(Anonimo)',
		roles: []
	};
}]);