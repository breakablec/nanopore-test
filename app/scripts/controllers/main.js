'use strict';

/**
 * @ngdoc function
 * @name nanoporetestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nanoporetestApp
 */
angular.module('nanoporetestApp')
  .controller('MainCtrl', function ($scope) {
      $scope.charts = [[1,2,3,4],[5,4,3,2,1]]

  });
