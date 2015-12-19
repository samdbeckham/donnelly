'use strict';

/**
 * @ngdoc overview
 * @name donnellyApp
 * @description
 * # donnellyApp
 *
 * Main module of the application.
 */
angular
    .module('donnellyApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/guest/:guestId', {
                templateUrl: 'views/guest.html',
                controller: 'GuestCtrl'
            })
            .when('/attendees', {
                templateUrl: 'views/attendees.html',
                controller: 'AttendeesCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
