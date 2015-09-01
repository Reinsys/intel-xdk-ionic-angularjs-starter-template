app.controller('AppController', function($scope, display) {  
    $scope.display = display;
    $scope.navBack = function() {
        window.history.back();
    }; 
});
app.controller('IndexController', function($scope, display) {
    $scope.$parent.title = 'Home';    
    
});
app.controller('SearchController', function($scope, display){    
     $scope.$parent.title = 'Search'; 
});