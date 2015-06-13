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
