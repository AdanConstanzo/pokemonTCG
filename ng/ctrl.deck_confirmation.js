app.controller("DeckConformationCtrl", function ($scope,$routeParams) {
  $scope.UserName = $routeParams.username.slice(1);
  $scope.DeckName = $routeParams.deckname.slice(1);
  var deckLink = document.getElementById("DeckLink");
  ///user:username-deck:deckname
  deckLink.href = "/#/user-"+$scope.UserName+"-deck-"+$scope.DeckName;

})
