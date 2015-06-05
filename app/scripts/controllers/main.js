'use strict';

/**
 * @ngdoc function
 * @name donnellyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the donnellyApp
 */
angular.module('donnellyApp')
    .controller('MainCtrl', function ($scope, Guest) {
        $scope.master = {};

        Guest.getById('uT4yM9FyZ9').then(function(data) {
            $scope.guest = data[0];
        }, function(e) {
            console.warn(e);
        });
        
        $scope.update = function(guest) {
            $scope.master = angular.copy(guest);
        };
    });
