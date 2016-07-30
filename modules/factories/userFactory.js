/*
  @Auhtor - Himanshu
  A factory responsible for all user related operation
 */

'use strict';
engageApp.factory('userFactory', function($http, $location,cookieService) {

  return {
      //function for logging in user
      userLogin: function(data){
          //cookieService.setObj('email',data);
          var $promise = $http.get('http://arnab.arnabmakur.me/api/sa/login/',data);
          $promise.then(function onSuccess(response){
            console.log(response);
          })
          .catch(function onError(err){
            console.log(err);
          })
          return $promise;
      }
  }
});
