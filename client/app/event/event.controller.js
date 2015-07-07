'use strict';

angular.module('lunchApp')
  .controller('EventCtrl', function ($scope, $http, $stateParams) {
    $scope.event = [];

    $http.get('/api/events/' + $stateParams.id ).success(function(event) {
      $scope.event = event;
    });
  });
