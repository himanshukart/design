"use strict";
engageApp.controller('globalController',['$scope','$rootScope','loginServices','$location', function($scope,$rootScope,loginServices,$location) {
  console.log("Inside global controller");
  // Set this variable true in corresponding controller to display the sidebar.

  if(loginServices.is_logged()){
    $rootScope.isLoginPage = true;
  }
  else{
    $rootScope.isLoginPage = false;
  }
  $(document).mouseover(function(e){

    // Check if click was triggered on or within #menu_content
    if( $(e.target).closest(".page-sidebar").length > 0 ) {
        return false;
    }
    else{
      $('.page-sidebar').removeAttr('style');
    }
    // Otherwise
    // trigger your click function
});

}]);
