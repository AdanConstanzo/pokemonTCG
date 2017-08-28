angular.module('app').controller('CardCtrl', function ($scope,$routeParams,GetCardSvc) {
    var cardId = $routeParams.cardId.slice(1);
    console.log(cardId);
    GetCardSvc.getOne(cardId)
    .then(function(card){
        $scope.CardName = card.name;
    },function(err){
        $scope.CardName = "NO CARD";
    })
});
