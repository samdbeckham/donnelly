'use strict';

/**
 * @ngdoc function
 * @name donnellyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the donnellyApp
 */
angular.module('donnellyApp')
    .controller('MainCtrl', function ($scope) {
        $scope.master = {};
        $scope.guest = {
            name: "Sam Beckham",
            attending: true 
        };

        $scope.update = function(guest) {
            $scope.master = angular.copy(guest);
        };
    });
