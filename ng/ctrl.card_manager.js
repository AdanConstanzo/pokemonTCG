angular.module("app").controller("CardManagerCtrl", function ($scope, $location, $location, UserSvc, CollectionSvc, GetCardSvc) {

    // handles if user is connected
    UserSvc.checkUserSession();

    CollectionSvc.getUserCollection()
        .then(function (collection) {
            "use strict";
            collection.forEach(function (call) {
                GetCardSvc.getOne(call.cardId)
                    .then(function (card) {
                        card.quantity = call.quantity;
                        $scope.collImageSource.push(card);
                    });
            });
        });
        
//======= Variables ========/
  $scope.collImageSource = [];
  var collectionHandler = {}
  // html main in Collection.html
  collectionHandler.colDoc = document.getElementById('main')
  //  current modal id
  collectionHandler.collCurrentCardId = ""
  // current modal card object
  collectionHandler.collCurrentCardObject = ""
  // starting value to check
  collectionHandler.collStartingValue = 0
  //final value to check
  collectionHandler.collFinalValue = 0
  // htmlObject of the value of modal input
  collectionHandler.collCardValue = 0
//======= Variables ========/

//============= Simple Functions =================//
  function AuthenicationError()
  {
    colDoc.innerHTML = "<h1>Log In Your Account To See Your Collection</h1>"
  }

  function removeCard()
  {
    $( '#card-'+collectionHandler.collCurrentCardId ).fadeOut(300,"swing",function()
    {
      CollectionSvc.removeCollection(collectionHandler.collCurrentCardObject)
    })
  }

//============= /Simple Functions =================//

//================ User Input Function ================//
  // provides our variables for the cards
  $scope.cardClick = function(cardObject)
  {
    collectionHandler.collCurrentCardObject = cardObject
    collectionHandler.collCurrentCardId = cardObject.id
    collectionHandler.collCardValue = document.getElementById('value-'+collectionHandler.collCurrentCardId)
    collectionHandler.collStartingValue = collectionHandler.collFinalValue = collectionHandler.collCardValue.value
  }

  // handles users entry based on + or -
  $scope.quantityHandler = function(theCondition)
  {
    if(theCondition === 0)
    {
      collectionHandler.collFinalValue --
      if(collectionHandler.collFinalValue <= 0)
      {
        collectionHandler.collCardValue.value = 0
        collectionHandler.collFinalValue = 0
      }
      collectionHandler.collCardValue.value = collectionHandler.collFinalValue
      return
    }
    else if (theCondition === 1)
    {
      collectionHandler.collFinalValue ++
      if(collectionHandler.collFinalValue <0)
      {
        collectionHandler.collCardValue.value = 0
        collectionHandler.collFinalValue = 0
      }
        collectionHandler.collCardValue.value = collectionHandler.collFinalValue
      return
    }
    collectionHandler.collFinalValue = collectionHandler.collCardValue.value
  }
//================ /User Input Function ================//

//================= modal event listeners =================//
  $(window).on('hidden.bs.modal', function() {
    if($location.path() === '/my_collection'){
      if(collectionHandler.collStartingValue == collectionHandler.collFinalValue)
        return
      else if (collectionHandler.collFinalValue == 0)
        return removeCard()
      else if ( collectionHandler.collStartingValue == 0)
        return CollectionSvc.postCollection(collectionHandler.collCurrentCardObject,collectionHandler.collFinalValue)
      else
        return CollectionSvc.updateCollection(collectionHandler.collCurrentCardObject,collectionHandler.collFinalValue)
    }
  }) // end of hidden.bs.modal
//================= /modal event listeners =================//


});
