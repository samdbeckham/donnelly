'use strict';

/**
 * @ngdoc function
 * @name donnellyApp.controller:AttendeesCtrl
 * @description
 * # AttendeesCtrl
 * Controller of the donnellyApp
 */
angular.module('donnellyApp')
    .controller('AttendeesCtrl', function ($scope, Guest) {
        Guest.getAll().then(function(data) {
            $scope.guests = data;
        });
    });
