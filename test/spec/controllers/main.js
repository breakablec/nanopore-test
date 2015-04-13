'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('nanoporetestApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of charts to the scope', function () {
    expect(scope.charts.length).toBeGreaterThan(0);
  });
});
