angular.module("weatherApp").service("homeService", function($http) {

  var darkSkyKey = "54f2199c7f2eeef83b7d85834c79a5c3";
  var googleMapsKey = "AIzaSyBCQvwyLahB8OTK-BZuAksotjpP1yQs8tc";

  this.geoCode = function(address) {
    return $http({
      method: 'GET',
      url:'https://maps.googleapis.com/maps/api/geocode/json?address=' +
            address + '&key=' + googleMapsKey
    }).then(function(response) {
      console.log("lat", response.data.results[0].geometry.location.lat);
      console.log("lng", response.data.results[0].geometry.location.lng);
    });
  };


  this.getData = function(location) {

    return $http({
      method: 'GET',
      url: 'https://api.darksky.net/forecast/' + darkSkyKey + '/37.8267,-122.4233'
    }).then(function(response) {
      console.log(response);
    });
  };

}); //end service
