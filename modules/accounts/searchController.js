
  engageApp.controller('searchCtrl',['$scope','$http','$location', function($scope,$http,$location) {

  $scope.findvalue = function(){
    $http({method: 'GET',url: 'api/users/search/'+$scope.searchvalue}).then(function successCallback(response)
      {
        console.log(response.data);
        
        //var res = JSON.parse(response.data);
        //console.log(res);
        $scope.employees=response.data;

        }, function errorCallback(response) {
          console.log("not got api");
        });
  }

}]);