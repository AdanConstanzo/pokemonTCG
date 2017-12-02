angular.module("app").controller("CardManagerCtrl", function ($scope, $location, $location, $rootScope, UserSvc, CollectionSvc, GetCardSvc) {

    // handles if user is connected
    UserSvc.checkUserSession()
        .then(function(response){
            if($rootScope.user_id) {
                CollectionSvc.getCollection($rootScope.user_id)
                    .then(function (collection) {
						"use strict";
                        $scope.collImageSource = collection;
                    });
            }
        });

	//======= Variables ========/
	$scope.collImageSource = [];
	var collectionHandler = {}
	// html main in Collection.html
	collectionHandler.colDoc = document.getElementById('main')
	//  current modal id
	collectionHandler.collCurrentCardId = ""
	// current modal card object
	collectionHandler.collCurrentCardObject = {}
	// starting value to check
	collectionHandler.collStartingValue = 0
	//final value to check
	collectionHandler.collFinalValue = 0
	// htmlObject of the value of modal input
	collectionHandler.collCardValue = 0
	//======= Variables ========/

	//============= Simple Functions =================//
	function AuthenicationError(){
		colDoc.innerHTML = "<h1>Log In Your Account To See Your Collection</h1>"
	}

	function removeCard(){
		$( '#card-'+collectionHandler.collCurrentCardId )
			.fadeOut(300,"swing",function(){
				CollectionSvc.removeCollection(collectionHandler.CollectionCardID);
			});
	}

	//============= /Simple Functions =================//

	//================ User Input Function ================//
	// provides our variables for the cards
	$scope.cardClick = function(cardObject){
		collectionHandler.collCurrentCardObject = cardObject.Card;
		collectionHandler.CollectionCardID = cardObject._id;
		collectionHandler.collCurrentCardId = cardObject.Card.id;
		collectionHandler.collCardValue = document.getElementById('value-'+collectionHandler.collCurrentCardId);
		collectionHandler.collStartingValue = collectionHandler.collFinalValue = collectionHandler.collCardValue.value;
	}

	// handles users entry based on + or -
	$scope.quantityHandler = function(theCondition){
		if (theCondition === 0) {
			collectionHandler.collFinalValue --;
			if (collectionHandler.collFinalValue <= 0) {
				collectionHandler.collCardValue.value = 0;
				collectionHandler.collFinalValue = 0;
			}
			collectionHandler.collCardValue.value = collectionHandler.collFinalValue;
			return;
		} else if (theCondition === 1) {
			collectionHandler.collFinalValue ++;
			if (collectionHandler.collFinalValue <0) {
				collectionHandler.collCardValue.value = 0;
				collectionHandler.collFinalValue = 0;
			}
			collectionHandler.collCardValue.value = collectionHandler.collFinalValue;
			return;
		}
		collectionHandler.collFinalValue = collectionHandler.collCardValue.value;
	}
	//================ /User Input Function ================//

	//================= modal event listeners =================//
	$(window).on('hidden.bs.modal', function() {

		if($location.path() === '/card_manager'){
			if(collectionHandler.collStartingValue === collectionHandler.collFinalValue) {
				return
			} else if (collectionHandler.collFinalValue === 0) {
				return removeCard()
			}else {
				return CollectionSvc.updateCollection({collection_id: collectionHandler.CollectionCardID,quantity: collectionHandler.collFinalValue});
			}
		}

	}) // end of hidden.bs.modal
	//================= /modal event listeners =================//


});
