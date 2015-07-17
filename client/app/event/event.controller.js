'use strict';

angular.module('lunchApp')
  .controller('EventCtrl', function ($scope, $http, $stateParams, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn;

    $http.get('/api/events/' + $stateParams.id).success(function (event) {
      $scope.event = event;
      $scope.userIsNotAttending = event.attendees.indexOf(Auth.getCurrentUser().name) < 0;
    });

    $scope.signUpUser = function () {
      $scope.event.attendees = [Auth.getCurrentUser().name];
      $http.put('/api/events/' + $stateParams.id, $scope.event);
    };
  });
