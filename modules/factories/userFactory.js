/*
  @Auhtor - Himanshu
  A factory responsible for all user related operation
 */

'use strict';
engageApp.factory('userFactory', function($http, $location,cookieService) {

  return {
      //function for logging in user
      userLogin: function(data){
          console.log(data);
          var $promise = $http.post('/login',data);
          $promise.then(function onSuccess(response){
          })
          .catch(function onError(err){
            console.log(err);
          })
          return $promise;
      }
  }
});
