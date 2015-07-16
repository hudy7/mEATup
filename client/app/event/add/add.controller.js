'use strict';

angular.module('lunchApp')
  .controller('AddCtrl', function ($scope, $http, $location, Auth) {

    $scope.addEvent = function () {
      $scope.event.createdBy = Auth.getCurrentUser().name;
      $scope.event.placeID = $scope.place.place_id;
      $scope.event.attendees = [];
      $scope.event.attendees.push(Auth.getCurrentUser().name);
      $scope.event.createdAt = new Date();
      $http.post('/api/events/', $scope.event)
        .success(function () {
        });
    };

    $scope.placeChanged = function() {
      $scope.place = this.getPlace();
    }
  });
