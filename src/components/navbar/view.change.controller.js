'use strict';

angular.module('ngStoreFront')
  .controller('ChangeCtrl', function ($location) {
    
        this.change = function ( path ) {
          $location.path( path );
        };
  });



