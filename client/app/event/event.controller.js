'use strict';

angular.module('lunchApp')
  .controller('EventCtrl', function ($scope, $http, $stateParams, Auth) {
    $http.get('/api/events/' + $stateParams.id).success(function (event) {
      $scope.event = event;
    });

    $scope.signUpUser = function () {
      $scope.event.attendees = [Auth.getCurrentUser().name];
      $http.put('/api/events/' + $stateParams.id, $scope.event);
    }
  });
