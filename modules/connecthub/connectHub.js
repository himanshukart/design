engageApp.controller('connectHub',['$scope','$http','$cookieStore','$location', function($scope,$http,$cookieStore,$location) {

//$scope.loginStatus = true;
//console.log($scope);
//$scope.name = 'dasdasdsadsdas';
var loginStatus = 'sadasdasdasda';
if ($cookieStore.get('loginStatus')==false)
  {
    loginStatus = false;
  }
if ($cookieStore.get('loginStatus')==true)
  {
    loginStatus = true;
  }


}]);
