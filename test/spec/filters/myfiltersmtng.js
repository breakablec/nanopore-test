'use strict';

describe('Filter: myFilterSmtng', function () {

  // load the filter's module
  beforeEach(module('nanoporetestApp'));

  // initialize a new instance of the filter before each test
  var myFilterSmtng;
  beforeEach(inject(function ($filter) {
    myFilterSmtng = $filter('myFilterSmtng');
  }));

  it('should return the input prefixed with "myFilterSmtng filter:"', function () {
    var text = 'angularjs';
    expect(myFilterSmtng(text)).toBe('myFilterSmtng filter: ' + text);
  });

});
