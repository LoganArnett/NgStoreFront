angular.module("ngStoreFront").run(["$templateCache", function($templateCache) {$templateCache.put("app/change/product-grid.html","<header ng-include=\"\'components/navbar/change-head.html\'\" class=\"view-change\"></header><div class=\"techs\" layout=\"row\" layout-align=\"center\"><md-card ng-repeat=\"product in main.trending | startFrom:main.currentPage*main.pageSize | limitTo:main.pageSize\" flex=\"80\" flex-md=\"40\" flex-lg=\"25\"><div layout=\"column\" layout-align=\"space-between center\"><a ng-href=\"{{product.url}}\" class=\"listing\"><img ng-src=\"{{product.MainImage.url_170x135}}\" class=\"grid-product-image\" alt=\"image missing\"><p class=\"price\"><strong>{{product.price | currency}}</strong></p><p class=\"title-grid\">{{product.title}}</p></a></div></md-card></div><section layout=\"row\" layout-align=\"center center\"><md-button ng-disabled=\"main.currentPage == 0\" ng-click=\"main.currentPage=main.currentPage-1\" class=\"md-raised\">Prev</md-button><p>{{main.currentPage+1}} of {{main.numPages()}}</p><md-button ng-disabled=\"main.currentPage >= main.numPages()-1\" ng-click=\"main.currentPage=main.currentPage+1\" class=\"md-raised\">Next</md-button></section>");
$templateCache.put("app/change/product-list.html","<header ng-include=\"\'components/navbar/change-head.html\'\" class=\"view-change\"></header><div class=\"techs\" layout=\"row\" layout-align=\"center\"><md-card ng-repeat=\"product in main.trending | startFrom:main.currentPage*main.pageSize | limitTo:main.pageSize\" flex-sm=\"75\" layout-margin=\"\" class=\"product-list\"><a ng-href=\"{{product.url}}\" class=\"listing\"><div layout=\"row\" layout-align=\"space-between center\"><img flex=\"20\" ng-src=\"{{product.MainImage.url_570xN}}\" class=\"small-product-image\" alt=\"image missing\"><p flex=\"10\"><strong>{{product.price | currency}}</strong></p><p flex=\"30\">{{product.title}}</p><md-button class=\"md-raised md-primary\"><span class=\"fa fa-plus\">Add to Cart</span></md-button></div></a></md-card></div><section layout=\"row\" layout-align=\"center center\"><md-button ng-disabled=\"main.currentPage == 0\" ng-click=\"main.currentPage=main.currentPage-1\" class=\"md-raised\">Prev</md-button><p>{{main.currentPage+1}} of {{main.numPages()}}</p><md-button ng-disabled=\"main.currentPage >= main.numPages()-1\" ng-click=\"main.currentPage=main.currentPage+1\" class=\"md-raised\">Next</md-button></section>");
$templateCache.put("app/change/product.html","<div layout=\"vertical\" layout-fill=\"\"><header ng-include=\"\'components/navbar/navbar.html\'\"></header><section class=\"product-views\"><div ui-view=\"\"></div></section></div>");
$templateCache.put("app/main/main.html","<div layout=\"vertical\" layout-fill=\"\"><header ng-include=\"\'components/navbar/navbar.html\'\"></header><md-content><header class=\"header jumbotron\" layout=\"row\" layout-align=\"center\"><div><h1>Trending <small class=\"fa fa-line-chart\"></small></h1><img flex=\"\" src=\"http://www.designsnext.com/wp-content/uploads/2014/09/Hipster-Gif.gif\" alt=\"BRO!\"></div></header><div class=\"techs\" layout=\"row\" layout-align=\"center\"><md-card ng-repeat=\"product in main.trending | startFrom:main.currentPage*main.pageSize | limitTo:main.pageSize\" flex=\"80\" flex-md=\"40\" flex-lg=\"30\"><a ng-href=\"{{product.url}}\" class=\"listing\"><div><img layout=\"row\" layout-align=\"space-around center\" flex=\"80\" ng-src=\"{{product.MainImage.url_570xN}}\" class=\"product-image\" alt=\"image missing\"><div layout=\"row\" layout-align=\"space-around center\" class=\"caption\"><h3 flex=\"70\" class=\"title\">{{product.title | limitTo: 20}}</h3><p flex=\"20\"><strong>{{product.price | currency}}</strong></p></div></div></a></md-card></div><section layout=\"row\" layout-align=\"center center\"><md-button ng-disabled=\"main.currentPage == 0\" ng-click=\"main.currentPage=main.currentPage-1\" class=\"md-raised\">Prev</md-button><p>{{main.currentPage+1}} of {{main.numPages()}}</p><md-button ng-disabled=\"main.currentPage >= main.numPages()-1\" ng-click=\"main.currentPage=main.currentPage+1\" class=\"md-raised\">Next</md-button></section></md-content><footer><md-toolbar layout=\"row\" layout-align=\"end center\"><md-button class=\"md-fab md-primary\" href=\"https://twitter.com/rxnerd\"><span class=\"fa fa-twitter\" layout-align=\"center center\"></span></md-button><md-button id=\"fb-btn\" class=\"md-fab\" href=\"https://twitter.com/rxnerd\"><span class=\"fa fa-facebook\" layout-align=\"center center\"></span></md-button><md-button id=\"insta\" class=\"md-fab\" href=\"https://twitter.com/rxnerd\"><span class=\"fa fa-instagram\" layout-align=\"center center\"></span></md-button></md-toolbar></footer></div>");
$templateCache.put("components/navbar/change-head.html","<div class=\"view-btns\" layout=\"row\" layout-align=\"end center\" ng-controller=\"ChangeCtrl as change\"><md-button class=\"md-noink\" ng-click=\"change.change(\'/products/grid\')\"><span class=\"fa fa-th\"></span></md-button><md-button class=\"md-noink\" ng-click=\"change.change(\'/products/list\')\"><span class=\"fa fa-th-list\"></span></md-button></div>");
$templateCache.put("components/navbar/navbar.html","<md-toolbar layout=\"row\" layout-align=\"center center\" ng-controller=\"NavbarCtrl\"><md-button href=\"#/\">Ng-Etsy</md-button><section flex=\"\" layout=\"row\" layout-align=\"end center\"><md-button href=\"#/products/grid\" class=\"category\">Grid</md-button><md-button href=\"#/products/list\" class=\"category\">List</md-button><md-button href=\"#/\" class=\"category\">Eyewear</md-button><md-button href=\"#/\" class=\"category\">Contact</md-button></section></md-toolbar>");}]);