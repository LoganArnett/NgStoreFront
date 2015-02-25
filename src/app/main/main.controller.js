'use strict';

angular.module('ngStoreFront')
    .filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    })

    .factory('Listangular', function(Restangular) {
        Restangular.setJsonp(true);
                Restangular.setRequestSuffix('.js');
                    return Restangular        
                        .one('listings/trending').get({
                            fields: 'url,title,description,price', limit: 100, includes: "MainImage"
                        });
    })
    
  .controller('MainCtrl', function (Listangular) {
        var self = this;
        this.trending;
        Listangular.then(function(trends){
            self.trending = trends.results;
        })
        
        //Pagination setup
         this.currentPage = 0;
         this.pageSize = 12;

        this.numPages = function() {
            return Math.ceil(self.trending.length / this.pageSize);
        };
     
  });
