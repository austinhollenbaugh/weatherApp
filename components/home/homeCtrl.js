angular.module("weatherApp").controller("homeCtrl", function($scope, homeService) {
  $scope.getForecast = function(location) {
    console.log(location);
    $scope.location = "";
    homeService.geoCode(location).then(function(response) {
      console.log(response);
      var lat = response.lat;
      var lng = response.lng;

      homeService.getForecast(lat, lng).then(function(response) {
        console.log(response);
        $scope.temp = response.currently.temperature;
        $scope.summary = response.currently.summary;
      });
    });
  };


});
