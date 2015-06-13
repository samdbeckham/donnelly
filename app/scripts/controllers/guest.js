'use strict';

/**
 * @ngdoc function
 * @name donnellyApp.controller:GuestCtrl
 * @description
 * # GuestCtrl
 * Controller of the donnellyApp
 */
angular.module('donnellyApp')
    .controller('GuestCtrl', function ($scope, $routeParams, Guest) {
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
