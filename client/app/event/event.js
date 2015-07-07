'use strict';

angular.module('lunchApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('event', {
        url: '/event/:id',
        templateUrl: 'app/event/event.html',
        controller: 'EventCtrl'
      });
  });
