'use strict';

angular.module('lunchApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.events = [];
    $scope.deals = [];

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
    $scope.dropMarker = function (place){


    };
  });
