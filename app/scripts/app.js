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
      .when('/guest/:guestId', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
