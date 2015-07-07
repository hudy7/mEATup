'use strict';

angular.module('lunchApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.events = [];

    $http.get('/api/events').success(function(events) {
      $scope.events = events;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
