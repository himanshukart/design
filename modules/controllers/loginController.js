engageApp.controller('loginController',['$scope','$http','$location','userFactory','loginServices','cookieService', function($scope,$http,$location,userFactory,loginServices,cookieService) {

  $scope.data = {};
  $scope.data.email = 'prince@eleve.co.in';
  $scope.data.password = 'secretPassword';

 console.log(loginServices.is_logged());
  // $scope.val = cookieService.getObj('email');
  // console.log($scope.val.password);
   if(loginServices.is_logged()){
     $location.path('hub');
  }
  else{
    userFactory.userLogin($scope.data)
        .then(function onSuccess(response) {

        })
        .catch(function onError(sailsresponse) {
          console.log(sailsresponse);
        })
        .finally(function eitherWay(){
        })
  }
}]);
