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
        $scope.guest;

        Guest.getAll().then(function(data) {
            $scope.guests = data;
        });
    });
