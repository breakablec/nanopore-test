'use strict';

/**
 * @ngdoc overview
 * @name nanoporetestApp
 * @description
 * # nanoporetestApp
 *
 * Main module of the application.
 */
angular
  .module('nanoporetestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
