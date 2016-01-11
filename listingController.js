angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      /*
      $scope.todos.push(newItem);
      */
    };

    $scope.deleteListing = function(index) {
      /*
      removing something from the todo list
      $scope.todos.splice(index,1);
      */
    };

    $scope.showDetails = function(index) {
        var address = $scope.listings[index].address,
            lat = $scope.listings[index].coordinates.latitude,
            long = $scope.listings[index].coordinates.longitude;
        if(typeof lat === 'undefined' || typeof long === 'undefined')
        {
            $scope.detailedinfo = address;
        }
        else {
          $scope.detailedInfo = address + ' @' + lat + ', ' + long;
        }
    };

  }
]);
