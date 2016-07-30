engageApp.controller('accountsController',['$scope','$http','$cookieStore','$location','WizardHandler', function($scope,$http,$cookieStore,$location,WizardHandler) {
  // getting cookies
  var userName = $cookieStore.get('userName');
  var adminName = $cookieStore.get('adminName');
  console.log(userName);
  console.log(adminName);
  

  $scope.finished = function() {
            alert("Wizard finished :)");
        }

        $scope.logStep = function() {
            console.log("Step continued");
        }

        $scope.goBack = function() {
            WizardHandler.wizard().goTo(0);
        }
        
        $scope.getCurrentStep = function(){
          return WizardHandler.wizard().currentStepNumber();
        }
        $scope.goToStep = function(step){
          WizardHandler.wizard().goTo(step);
        }



    // create organisation  
    $scope.createOrg = function(){
      console.log($scope);

      /*
      $http({method: 'GET',url: 'api/sa/login/'+$scope.email+'/'+$scope.password}).then(function successCallback(response)
        {
           $cookieStore.put('myFavorite',response);
          $location.path('/createaccount');
          //var res = JSON.parse(response.body);
          // console.log(res);

          }, function errorCallback(response) {
            console.log("not got api");
          });
      */
    }

    // organisation list



  }]);
