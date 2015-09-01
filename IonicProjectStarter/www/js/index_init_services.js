/* --------------
 initialization 
  the xdkFilter argument can be set to a function that
   receives the data of the service method and can return alternate data
   thus you can reformat dates or names, remove or add entries, etc.
   -------------- */

var app = angular.module('myApp',['ionic']);
app.config(['$controllerProvider', function($controllerProvider) {
	$controllerProvider.allowGlobals();
}]);
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', {
    url: '/index',
    templateProvider : function(display){/*use display service to load the intel xdk template by page id*/
        return display.getPageTemplate('page-index').then(function(template){
            return template;
        });      
    },
    controller: 'IndexController'
  })
  .state('search', {
    url: '/search',
    templateProvider : function(display){
        return display.getPageTemplate('page-search').then(function(template){
            return template;
        }); 
    },
    controller: 'SearchController'    
  })

  $urlRouterProvider.otherwise("/index");

});