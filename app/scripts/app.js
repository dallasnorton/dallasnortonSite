'use strict';

/**
 * @ngdoc overview
 * @name dallasnortonApp
 * @description
 * # dallasnortonApp
 *
 * Main module of the application.
 */
angular
  .module('dallasnortonApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
