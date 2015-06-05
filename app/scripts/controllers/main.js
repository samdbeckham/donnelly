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

        $scope.submitted = false;

        Guest.getById(guestId).then(function(data) {
            $scope.guest = data;
        }, function(e) {
            console.warn(e);
        });
        
        $scope.rsvp = function() {
            $scope.guest.save();
            $scope.submitted = true;
        };
    });
