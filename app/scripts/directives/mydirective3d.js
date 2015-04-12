'use strict';

/**
 * @ngdoc directive
 * @name nanoporetestApp.directive:myDirective3d
 * @description
 * # myDirective3d
 */
angular.module('nanoporetestApp')
  .directive('myDirective3d', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective3d directive');
      }
    };
  });
