engageApp.controller('loginController',['$scope','$http','$location','userFactory','loginServices', function($scope,$http,$location,userFactory,loginServices) {

  $scope.data = 'test';
  console.log(loginServices.is_logged());
  userFactory.userLogin($scope.data)
      .then(function onSuccess(response) {

      })
      .catch(function onError(sailsresponse) {
        console.log(sailsresponse);
      })
      .finally(function eitherWay(){
      })
}]);
