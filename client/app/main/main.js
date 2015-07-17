'use strict';

angular.module('lunchApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });

var map = $("#myMap");
window.onLoad(function(){
  google.maps.event.trigger(map, 'resize');
  console.log("test");
},100);
