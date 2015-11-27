app.factory('display', ['$filter','$q','$ionicPopup','$ionicSideMenuDelegate','$ionicHistory', function($filter, $q, $ionicPopup, $ionicSideMenuDelegate, $ionicHistory) {
    return {
        alert : function(message, title, button, callback){
            if(!callback) var callback = function(){return;}
            if(!title) title = 'Attention';
            if(!button) button = 'Close';
            var alertPopup = $ionicPopup.alert({
                 title: title,
                 template: message,
                buttons: [
                  {
                    text: '<b>'+button+'</b>',
                    type: 'button-positive',
                  }    
                ]

               });
               alertPopup.then(callback);
        },
        goToPath : function(pathLink){
            var path = "index.html#" + pathLink;
            window.location = path;
        },
        getPageTemplate : function(pageId){
          var deffered = $q.defer();
          $("#template").load("views.html #" + pageId, function(){                    
              var template = $("#" + pageId).html();
              $(this).html('')
              deffered.resolve(template);
          });
          return deffered.promise;
        },
        menuIsOpen : function(){
            return ($ionicSideMenuDelegate.isOpenLeft()) ? true : false;
        },
        currentStateName : function(){
            return $ionicHistory.currentStateName();
        }
    }
        
}]);

app.factory('helper', ['$filter', function($filter) {
    return {
        toDateTime : function(secs)
            {
            var t = new Date(1970,0,1);
            t.setSeconds(secs);
            return t;
            }
        }
}]);
