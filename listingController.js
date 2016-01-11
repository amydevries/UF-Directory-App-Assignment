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
      $scope.details = $scope.listings[index];
      console.log($scope.selected);
    };

  }
]);