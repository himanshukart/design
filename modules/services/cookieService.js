'use strict';

//Service to set get and destroy value from cookies
engageApp.factory('cookieService', ['$http','$cookies', function($http,$cookies){
	return{
    //function to set value in cookies
		set:function(key,value){
			return $cookies.put(key,value);
		},
		setObj:function(key,value){
			return $cookies.putObject(key,value);
		},
    //to get value from cookies
		get:function(key){
			return $cookies.get(key);
		},
		getObj:function(key){
			return $cookies.getObject(key);
		},
    //destroy cookies
		destroy:function(key){
			return $cookies.remove(key);
		}
	};
}])
