'use strict';

describe('Filter: startsWith', function () {

  // load the filter's module
  beforeEach(module('donnellyApp'));

  // initialize a new instance of the filter before each test
  var startsWith;
  beforeEach(inject(function ($filter) {
    startsWith = $filter('startsWith');
  }));

  it('should return the input prefixed with "startsWith filter:"', function () {
    var text = 'angularjs';
    expect(startsWith(text)).toBe('startsWith filter: ' + text);
  });

});
