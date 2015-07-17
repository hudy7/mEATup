'use strict';

angular.module('lunchApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
    $scope.today = new Date();
    $scope.events = [];
    $scope.deals = [];
    $scope.details = "Click on a marker on the map to view more information about that location.";
    $scope.detailsClicked = false;
    $http.get('/api/events').success(function (events) {
      $scope.events = events;
    });

    $http.get('/api/deals').success(function (deals) {
      $scope.deals = deals;
    });

    $http.get('/api/deals/expires').success(function (deals) {
      $scope.deals = $scope.deals.concat(deals);
    });

    $scope.addThing = function () {
      if ($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', {name: $scope.newThing});
      $scope.newThing = '';
    };

    $scope.deleteThing = function (thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.populateDetails = function (event){
      $scope.detailsClicked = true;
      console.log("tetx", this.title);
      $scope.details = this.title.toString();
    };

  });
