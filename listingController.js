angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.showAdd = false;

    $scope.addButton = function(){
      $scope.showInfo = false;
      $scope.showAdd = true;
    }

    $scope.addListing = function(entry) {

      $scope.listings.push(entry);

      $scope.showAdd = false;
      $scope.showInfo = true;
    };

    $scope.deleteListing = function(index) {
      /*
      removing something from the todo list
      $scope.todos.splice(index,1);
      */
      $scope.listings.splice(index,1);
    };

    $scope.showInfo = false;

    $scope.showDetails = function(index) {
        $scope.showInfo = true;
        $scope.showAdd = false;

        $scope.code = '';
        $scope.building = '';
        $scope.address = '';
        $scope.coords = '';

        $scope.code = $scope.listings[index].code;
        $scope.building = $scope.listings[index].name;
        $scope.address = $scope.listings[index].address;
        $scope.coords = $scope.listings[index].coordinates.latitude + ', ' + $scope.listings[index].coordinates.longitude;
    };

  }
]);
