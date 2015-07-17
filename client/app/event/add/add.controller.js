'use strict';

angular.module('lunchApp')
  .controller('AddCtrl', function ($scope, $http, $location, Auth) {

    $scope.addEvent = function () {
      $scope.event.createdBy = Auth.getCurrentUser().name;
      $scope.event.createdByEmail = Auth.getCurrentUser().email;
      $scope.event.lat = $scope.place.geometry.location.A;
      $scope.event.long = $scope.place.geometry.location.F;
      $scope.event.phone = $scope.place.formatted_phone_number;
      $scope.event.addressHTML = $scope.place.adr_address;
      $scope.event.address = $scope.place.formatted_address;
      $scope.event.price = $scope.place.price_level;
      $scope.event.rating = $scope.place.rating;
      $scope.event.website = $scope.place.website;
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
    };

    $scope.placeChanged = function() {
      $scope.place = this.getPlace();
    };
  });
