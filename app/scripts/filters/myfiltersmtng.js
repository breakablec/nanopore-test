'use strict';

/**
 * @ngdoc filter
 * @name nanoporetestApp.filter:myFilterSmtng
 * @function
 * @description
 * # myFilterSmtng
 * Filter in the nanoporetestApp.
 */
angular.module('nanoporetestApp')
  .filter('myFilterSmtng', function () {
    return function (input) {
      return 'myFilterSmtng filter: ' + input;
    };
  });
