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

            if (!$scope.query) {
                $scope.guest = '';
                return;
            }

            params[key] = $scope.query;
            results = $filter('startsWith')($scope.guests, params);

            if (!results || results.length < 1) {
                results = $filter('filter')($scope.guests, params, 'strict');

                if (!results || results.length < 1) {
                    $scope.guest = '';
                    return;
                }
            }

            $scope.guest = results[0];
        };

        Guest.getAll().then(function(data) {
            $scope.guests = data;
        });
    });
