'use strict';

angular.module('lunchApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $anchorScroll) {
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function () {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function (route) {
      return route === $location.path();
    };

    $scope.scrollTo = function(id) {
      $location.path("/")
      $location.hash(id);
      $anchorScroll.yOffset = 100;
      $anchorScroll();
    }
  });
