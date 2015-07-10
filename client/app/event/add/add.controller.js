'use strict';

angular.module('lunchApp')
  .controller('AddCtrl', function ($scope, $http, $location, Auth) {

    $scope.addEvent = function () {
      $scope.event.createdBy = Auth.getCurrentUser().name;
      $scope.event.attendees = [];
      $scope.event.attendees.push(Auth.getCurrentUser().name);
      $http.post('/api/events/', $scope.event)
        .success(function () {
          $scope.event = '';
          $location.path('/home');
        });
    };
  });
