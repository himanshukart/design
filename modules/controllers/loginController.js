engageApp.controller('loginController',['$scope','$http','$location','userFactory','loginServices','cookieService', function($scope,$http,$location,userFactory,loginServices,cookieService) {

  $scope.data = {};
  $scope.data.email = 'prince@eleve.co.in';
  $scope.data.password = 'secretPassword';
  userFactory.userLogin($scope.data)
      .then(function onSuccess(response) {

      })
      .catch(function onError(sailsresponse) {
        console.log(sailsresponse);
      })
      .finally(function eitherWay(){
      })
}]);
