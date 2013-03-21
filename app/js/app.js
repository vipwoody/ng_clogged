'use strict';

/* App Module */


angular.module('phonecat', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      when('/home', {templateUrl: 'partials/home.html'}).
	  when('/contact', {templateUrl: 'partials/contact.html', controller: CityListCtrl}).
	  when('/about', {templateUrl: 'partials/about.html'}).
      otherwise({redirectTo: '/phones'});
}]);



// angular.module('clogged', [])
// 	.config(['$routerProvider', function($routeProvider){
// 		$routeProvider
// 		.when('/home', {templateUrl: 'partials/home.html'})
// 		.when('/contact', {templateUrl: 'partials/contact.html'})
// 		.when('/about', {templateUrl: 'partials/about.html'})
// 		.otherwise({redirectTo: '/home'});
// 	}]);