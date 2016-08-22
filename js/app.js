var app = angular.module('hotVenuesApp', []);

app.controller('venuesController', function($scope, $http) {

  var clientID = "40AYZMDTR30R15M0F2LD2R24BKKFX3M2TKGBJXYKKDEPOM0L",
      clientSecret = "EASOH1YPQK5F2HPASNEMMDKEI11BAIPNOLXBRFWNUPVJEWZN",
      base_url = "https://api.foursquare.com/v2/venues/explore?near=";

  $scope.fetchResults = function() {
    $http.get(base_url + $scope.search + "&client_id=" + clientID + "&client_secret=" + clientSecret + " &v=20131124")
      .then(function(response) {
        $scope.results = response.data;
      });
  };
});
