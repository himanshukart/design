engageApp.controller('loginController',['$scope','$http','$location','userFactory', function($scope,$http,$location,userFactory) {

  $scope.data = 'test';
  userFactory.userLogin($scope.data)
      .then(function onSuccess(response) {

      })
      .catch(function onError(sailsresponse) {
        console.log(sailsresponse);
      })
      .finally(function eitherWay(){
      })
}]);
