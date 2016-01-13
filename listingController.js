angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {

    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.addListButton = false; 
    $scope.showAdd = true;
    $scope.showInfo = true;
    $scope.showListAdded = true; 
    $scope.defaultMessage = false; 


    $scope.addButton = function(){
      $scope.showInfo = true;
      $scope.defaultMessage = true; 
      $scope.addListButton = true; 
      $scope.showAdd = false;
    }


    $scope.addListing = function(entry) {
        $scope.enterCode = '';
        $scope.enterName = '';
        $scope.enterAddress = '';
        $scope.enterLongitude = '';
        $scope.enterLatitude = '';

      $scope.listings.push(entry);

      $scope.showAdd = true;
      $scope.showInfo = true;
      $scope.defaultMessage = true;
      $scope.showListAdded = false; 
      $scope.defaultMessage = false; 
      $scope.addListButton = false; 
    };


    $scope.deleteListing = function(listing) {
      /*
      removing something from the todo list
      $scope.todos.splice(index,1);
      */
      

      if(confirm("Press OK to confirm deletion.")){
        $scope.listings.splice($scope.listings.indexOf(listing),1);
        $scope.showInfo = true;
        $scope.defaultMessage = false;
      }
    };



    $scope.showDetails = function(listing) {
        $scope.showInfo = false;
        $scope.defaultMessage = true;
        $scope.showAdd = true;
        $scope.addListButton = false;

        $scope.code = '';
        $scope.building = '';
        $scope.address = '';
        $scope.coords = '';

        index = $scope.listings.indexOf(listing);

        $scope.code = $scope.listings[index].code;
        $scope.building = $scope.listings[index].name;
        $scope.address = $scope.listings[index].address;
        $scope.coords = $scope.listings[index].coordinates.latitude + ', ' + $scope.listings[index].coordinates.longitude;
    };

  }
]);
