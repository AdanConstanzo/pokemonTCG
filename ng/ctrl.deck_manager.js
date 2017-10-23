app.controller("DeckManagerCtrl", function ($scope, UserSvc, DeckBuilderSvc) {

    UserSvc.returnSessionUserName()
        .then(function (username) {
            "use strict";
            if (!username) {
              var body = document.getElementById("DeckManager");
              body.innerHTML = "<center><h1><a href='/#/login'>PLEASE LOGIN</a></h1></center>"
              return;
            } else {
              DeckBuilderSvc.getMyDecks(username)
                .then(function (response) {
                    $scope.User = username;
                    $scope.UserDecks = response;
            });
          }
      });

});
