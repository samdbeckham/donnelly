'use strict';

/**
 * @ngdoc function
 * @name donnellyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the donnellyApp
 */
angular.module('donnellyApp')
    .controller('MainCtrl', function ($scope, $routeParams, Guest) {
        var guestId = $routeParams.guestId;
        $scope.master = {};

        Guest.getById(guestId).then(function(data) {
            $scope.guest = data[0];
        }, function(e) {
            console.warn(e);
        });
        
        $scope.update = function(guest) {
            $scope.master = angular.copy(guest);
        };
    });
