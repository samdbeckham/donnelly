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
        $scope.startsWith = function(state, viewValue) {
            return state.substr(0, viewValue.length).toLowerCase() == viewValue.toLowerCase();
        };

        $scope.guests = [
            {
                name: 'Sam Beckham'
            },
            {
                name: 'Jor Howes'
            },
            {
                name: 'Jonny Grant'
            },
            {
                name: 'Anth Simpson'
            },
        ];
    });
