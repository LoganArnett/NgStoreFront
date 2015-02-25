'use strict';

angular.module('ngStoreFront')
    .filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
    }
  })
  .controller('MainCtrl', function (trending) {
    var self = this;
    
    this.trending = trending.results
    
    //Pagination setup
     this.currentPage = 0;
     this.pageSize = 12;
    
    this.numPages = function() {
        return Math.ceil(this.trending.length / this.pageSize);
    };
     
  });
