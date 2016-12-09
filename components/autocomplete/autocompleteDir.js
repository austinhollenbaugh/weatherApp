angular.module("weatherApp").directive("autocomplete", function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, model) {
      var options = {
          types: ["geocode"],
          componentRestrictions: {}
      };
      scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

      // console.log(element);

      google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
        scope.$apply(function() {
            model.$setViewValue(element.val());
        });
      });
    }
  };
});

//from https://gist.github.com/VictorBjelkholm/6687484
