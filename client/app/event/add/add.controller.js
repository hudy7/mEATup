'use strict';

angular.module('lunchApp')
  .controller('AddCtrl', function ($scope, $http, $location, Auth) {

    $scope.addEvent = function () {
      $scope.event.createdBy = Auth.getCurrentUser().name;
      $scope.event.createdByEmail = Auth.getCurrentUser().email;
      $scope.event.attendees = [];
      $scope.event.attendees.push(Auth.getCurrentUser().name);
      $scope.event.createdAt = new Date();
      $http.post('/api/events/', $scope.event)
        .success(function () {
        });
    };

    $scope.addDeal = function() {
      $scope.deal.createdByEmail = Auth.getCurrentUser().email;
      if ($scope.deal.expires) {
        $http.post('/api/deals/expires/', $scope.deal);
      }
      else {
        $http.post('/api/deals/', $scope.deal);
      }
    }
  });
