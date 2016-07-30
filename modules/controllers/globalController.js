"use strict";
engageApp.controller('globalController',['$scope','$rootScope','$cookieStore','$location', function($scope,$rootScope,$cookieStore,$location) {
  console.log("Inside global controller");
  // Set this variable true in corresponding controller to display the sidebar.
  $rootScope.isLoginPage = true;
  $(document).click(function(e){
    if( $(e.target).closest(".page-sidebar").length > 0 ) {
        return false;
    }
    else{
      $(".page-sidebar").removeAttr('style');
    }
  });
}]);
