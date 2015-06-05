'use strict';

describe('Controller: GuestctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('donnellyApp'));

  var GuestctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GuestctrlCtrl = $controller('GuestctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
