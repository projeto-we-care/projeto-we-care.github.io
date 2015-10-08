'use strict';

describe('Controller: JoinUsCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var JoinUsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JoinUsCtrl = $controller('JoinUsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JoinUsCtrl.awesomeThings.length).toBe(3);
  });
});
