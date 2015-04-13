'use strict';

describe('Directive: myDirective3d', function () {

  // load the directive's module
  beforeEach(module('nanoporetestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should create a directive', inject(function ($compile) {
    element = angular.element('<my-directive-3d ng-attr-dataset="[1]"></my-directive-3d>');
    element = $compile(element)(scope);
    expect(element[0].outerHTML).toContain('my-directive-3d');
  }));
});
