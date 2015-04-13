'use strict';

/**
 * @ngdoc directive
 * @name nanoporetestApp.directive:myDirective3d
 * @description
 * # myDirective3d
 */
angular.module('nanoporetestApp')
  .directive('myDirective3d', ['d3Service', function (d3) {
    return {
      template: '',
      restrict: 'AEC',
      controller: function($scope, $element){

      },
      link: function postLink(scope, element, attrs) {
        //Wait for d3 to initalize over the factory
        d3.d3().then(function (d3) {
          var height = 200;
          var width = 200;
          var vScale = 50;
          var hScale = 50;
          var svg = d3.select(element[0]).append("svg").attr("width", width).attr("height", height);
          //use a workaround as scope property seems to conflict with attribute binding and its quite late
          var dataset = JSON.parse(element.attr('dataset'));
          //Draw the Rectangle (bar)
          var rectangle = svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr({
              class:'bar',
              width:'10px',
              height:function(d) {
              var barHeight = d * vScale;
                return barHeight + 'px';
              },
              x:function(d,i) {
                return i * hScale;
              },
              y:function(d,i) {
                return height - (d * vScale);
              }
            });
        });
      }
    };
  }]);
