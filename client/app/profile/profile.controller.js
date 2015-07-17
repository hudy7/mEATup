'use strict';

angular.module('lunchApp')
  .controller('ProfileCtrl', function ($scope, $http, $state, Auth) {
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.today = new Date();
    $http.get('/api/events').success(function (events) {
      $scope.events = events;
    });

    $scope.delete = function(event) {
      $http.delete('/api/events/' + event._id).success(function(res) {
        $state.go($state.current, {}, {reload: true});
      });
    }
  });
