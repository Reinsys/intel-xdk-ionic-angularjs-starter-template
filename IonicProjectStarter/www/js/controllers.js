app.controller('AppController', function($scope, display, $ionicHistory, $ionicSideMenuDelegate, $ionicPlatform, $rootScope) {  
    $scope.display = display;
    $ionicPlatform.onHardwareBackButton(function(event){
        $ionicHistory.goBack();
    });
    $scope.toggleLeft = function(){
        $ionicSideMenuDelegate.toggleLeft();
    }
});
app.controller('IndexController', function($rootScope, $scope, display) {
    $rootScope.title = 'Home';    
    
});
app.controller('SearchController', function($scope, display){    
     $scope.$parent.title = 'Search'; 
});