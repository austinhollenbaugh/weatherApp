angular.module("weatherApp").controller("homeCtrl", function($scope, homeService) {
  $scope.getForecast = function(location) {
    console.log(location);
    $scope.location = "";
    homeService.geoCode(location);
  };


});
