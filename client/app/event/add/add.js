'use strict';

angular.module('lunchApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('add', {
        url: '/add',
        templateUrl: 'app/event/add/add.html',
        controller: 'AddCtrl'
      });
  });