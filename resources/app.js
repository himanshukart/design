var engageApp = angular.module('engageApp',['ngRoute','ngAnimate','ngCookies','ui.bootstrap']);
//var engageApp = angular.module('engageApp',['ngRoute','ngAnimate','ngCookies','ui.bootstrap','mgo-angular-wizard']);


engageApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/',{
          templateUrl: 'modules/login/login.html',
          controller: 'loginController'
        }).
      when('/hub',{
        templateUrl: 'modules/connecthub/connecthub.html',
        controller: 'loginController'
      }).
      when('/groups', {
		      templateUrl: 'modules/accounts/group.html',
		      controller: 'loginController'
        }).
      when('/calender', {
		      templateUrl: 'modules/accounts/calender.html',
		      controller: 'loginController'
        }).
      when('/gallery', {
          templateUrl: 'modules/accounts/gallery.html',
          controller: 'loginController'
        }).
      when('/forum', {
		      templateUrl: 'modules/accounts/forum.html',
		      controller: 'loginController'
        }).
      when('/report', {
          templateUrl: 'modules/accounts/report.html',
          controller: 'loginController'
        }).
      otherwise({
		      redirectTo: '/404'
        });
}]);
