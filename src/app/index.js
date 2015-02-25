'use strict';

angular.module('ngStoreFront', ['ngAnimate', 'ngCookies', 'ngTouch', 'restangular', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
    
    
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
            trending: function(Restangular){
                    return Restangular.one('app/listings/trending.json').get();
             }
        }
      })
      .state('products', {
        url: '/products',
        templateUrl: 'app/change/product.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
            trending: function(Restangular){
                    return Restangular.one('app/listings/trending.json').get();
             }
        }
    })
      .state('products.grid', {
        url: '/grid',
        templateUrl: 'app/change/product-grid.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
            trending: function(Restangular){
                    return Restangular.one('app/listings/trending.json').get();
             }
        }
      })
      .state('products.list', {
        url: '/list',
        templateUrl: 'app/change/product-list.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
            trending: function(Restangular){
                    return Restangular.one('app/listings/trending.json').get();
             }
        }
      });
      

    $urlRouterProvider.otherwise('/');
  })
;
