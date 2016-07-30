"use strict";
engageApp.controller('globalController',['$scope','$rootScope','$cookieStore','$location', function($scope,$rootScope,$cookieStore,$location) {
  console.log("Inside global controller");
  // Set this variable true in corresponding controller to display the sidebar.
  $rootScope.isLoginPage = false;
}]);
