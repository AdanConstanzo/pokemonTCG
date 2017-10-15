app.controller("DeckManagerCtrl", function ($scope,UserSvc,DeckBuilderSvc) {

  UserSvc.hasSession().then(function(response){
    if(!response){
      var body = document.getElementById("DeckManager");
      body.innerHTML = "<center><h1><a href='/#/login'>PLEASE LOGIN</a></h1></center>"
      return;
    }
    UserSvc.checkLogIn().then(function(user){
      DeckBuilderSvc.getMyDecks(user).then(function(response){
        $scope.User = user;
        $scope.UserDecks = response;
        console.log(response[0]);
      })
    });
  });

});
