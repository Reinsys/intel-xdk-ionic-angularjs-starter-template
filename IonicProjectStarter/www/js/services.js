app.factory('display', ['$filter','$q','$ionicPopup', function($filter, $q, $ionicPopup) {
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
