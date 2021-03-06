'use strict';

// angular.js main app initialization
var app = angular.module('bigly', []).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'pages/index.html',
          activetab: 'home',
          controller: HomeCtrl }).
        when('/snap-organize/privacy', {
          templateUrl: 'pages/privacy/snap-organize.html',
          activetab: 'SnapOrganize',
          controller: SnapOrganizePrivacyCtrl }).
        otherwise({ redirectTo: '/' });
    }]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {

        $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });
  }]);
