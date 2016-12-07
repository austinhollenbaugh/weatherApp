angular.module("weatherApp").service("homeService", function($http) {

  var darkSkyKey = "54f2199c7f2eeef83b7d85834c79a5c3";
  var googleMapsKey = "AIzaSyBCQvwyLahB8OTK-BZuAksotjpP1yQs8tc";

  this.getForecast = function(lat, lng) {
    return $http({
      method: 'GET',
      url: 'https://api.darksky.net/forecast/' + darkSkyKey + '/'+ lat + ',' + lng
    }).then(function(response) {
      // console.log(response.data);
      return response.data;
    });
  };

  this.geoCode = function(address) {
    return $http({
      method: 'GET',
      url:'https://maps.googleapis.com/maps/api/geocode/json?address=' +
            address + '&key=' + googleMapsKey
    }).then(function(response) {
      return response.data.results[0].geometry.location;
    });
  };




}); //end service
