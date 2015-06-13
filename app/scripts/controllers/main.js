'use strict';

/**
 * @ngdoc function
 * @name donnellyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the donnellyApp
 */
angular.module('donnellyApp')
    .controller('MainCtrl', function ($scope, $filter, Guest) {
        $scope.search = function(key) {
            var params = {},
                results = [];

            params[key] = $scope.query;
            results = $filter('startsWith')($scope.guests, params);

            if (!results || results.length < 1) {
                $scope.guest = '';
            } else {
                $scope.guest = results[0][key];
            }
        }

// startsWith: { 'name': query }

        Guest.getAll().then(function(data) {
            $scope.guests = data;
        });
    });
