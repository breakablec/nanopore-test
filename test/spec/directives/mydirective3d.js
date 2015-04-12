'use strict';

describe('Directive: myDirective3d', function () {

  // load the directive's module
  beforeEach(module('nanoporetestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-directive3d></my-directive3d>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myDirective3d directive');
  }));
});
