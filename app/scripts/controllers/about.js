'use strict';

/**
 * @ngdoc function
 * @name donnellyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the donnellyApp
 */
angular.module('donnellyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
