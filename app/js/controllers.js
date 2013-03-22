'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];


function PhoneDetailCtrl($scope, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams'];

function CityListCtrl($scope, $http){
	$http.get('https://api.mongolab.com/api/1/databases/world/collections/cities?apiKey=PpXY7fPp3frW1XD6lTNCUOuEDfbi40ES').success(function(data){
		$scope.cities = data;

	});
	$scope.size = 30;
	$scope.ordered = 'pop';

}

//CityListCtrl.$inject = ['$scope', '$http'];
