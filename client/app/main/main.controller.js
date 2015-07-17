'use strict';

angular.module('lunchApp')
  .controller('MainCtrl', function ($scope, $http, $stateParams, $state, Auth) {
    $scope.today = new Date();
    $scope.events = [];
    $scope.deals = [];
    $scope.details = '';
    $scope.detailsClicked = false;
    $http.get('/api/events').success(function (events) {
      $scope.events = events;
    });

    $http.get('/api/deals').success(function (deals) {
      $scope.deals = deals;
    });

    $http.get('/api/deals/expires').success(function (deals) {
      $scope.deals = $scope.deals.concat(deals);
    });

    $scope.signUpUser = function (req) {
      $http.get('/api/events/' + req._id).success(function (ev) {
        $scope.sendme = ev;
        $scope.sendme.attendees = [Auth.getCurrentUser().name];
        $http.put('/api/events/' + $scope.sendme._id, $scope.sendme).success(function(res) {
          $state.go($state.current, {}, {reload: true});
        });
      });
    };

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

    $scope.populateDetails = function (event){
      $scope.detailsClicked = true;
      $scope.details = this.title.toString();
    };

  });
