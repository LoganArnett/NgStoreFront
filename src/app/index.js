'use strict';

angular.module('ngStoreFront', ['ngAnimate', 'ngCookies', 'ngTouch', 'restangular', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
    
    RestangularProvider.setDefaultHeaders({'Access-Control-Allow-Origin': 'http://localhost:3000'});
    RestangularProvider.setBaseUrl('https://openapi.etsy.com/v2/');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultRequestParams('jsonp', {
        callback: 'JSON_CALLBACK'
    });
    RestangularProvider.setDefaultRequestParams({
        api_key: 'ckea25vvlmrvo5j0oy1adlip'
    });
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
            trending: function(Restangular){
                Restangular.setJsonp(true);
                Restangular.setRequestSuffix('.js');
                
                    return Restangular        
                        .one('listings/trending').get({
                            fields: 'url,title,description,price', limit: 100, includes: "MainImage"
                        });
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
                Restangular.setJsonp(true);
                Restangular.setRequestSuffix('.js');
                
                    return Restangular        
                        .one('listings/trending').get({
                            fields: 'url,title,description,price', limit: 100, includes: "MainImage"
                        });
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
                Restangular.setJsonp(true);
                Restangular.setRequestSuffix('.js');
                
                    return Restangular        
                        .one('listings/trending').get({
                            fields: 'url,title,description,price', limit: 100, includes: "MainImage"
                        });
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
                Restangular.setJsonp(true);
                Restangular.setRequestSuffix('.js');
                
                    return Restangular        
                        .one('listings/trending').get({
                            fields: 'url,title,description,price', limit: 100, includes: "MainImage"
                        });
             }
        }

      });
      

    $urlRouterProvider.otherwise('/');
  })
;
