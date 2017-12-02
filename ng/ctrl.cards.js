angular.module('app').controller('CardsCtrl', function ($scope,$location,$compile,GetCardSvc,UserSvc,SetSvc,CollectionSvc) {

    SetSvc.getAllSets()
        .then(function (response) {
            $scope.PokemonSet = response;
            $scope.set(response[0]);
    });

    UserSvc.returnSessionUserName()
        .then(function (response) {
            "use strict";
            $scope.loggedIn = response;
    });

//==============   Modal Event Listeners ================//

    $(window).on('hide.bs.modal', function() {

        if ($location.path() === "/cards") {
            if(ctrlCardsObject.finishedValue == ctrlCardsObject.startingValue) {
                return;
            } else if (ctrlCardsObject.finishedValue == 0) {
                return CollectionSvc.removeCollection(ctrlCardsObject.collection_db_id);
            } else if (ctrlCardsObject.startingValue == 0 ) {
                return CollectionSvc.postCollection({card_id: ctrlCardsObject.card_db_id, quantity: ctrlCardsObject.finishedValue});
            } else {
                return CollectionSvc.updateCollection({collection_id: ctrlCardsObject.collection_db_id, quantity: ctrlCardsObject.finishedValue});
            }
        }

    });
//============== ./Modal Event Listeners ================//

//=========   Simple Function ==========//

    function changeSetName (set){
        ctrlCardsObject.getTarget.innerHTML = set + ctrlCardsObject.caret;
    }
    function changeSearchBar () {
        ctrlCardsObject.searchButton.className = "glyphicon glyphicon-remove";
        ctrlCardsObject.isSearch = true;
    }
    function clearSearch () {
        $scope.PokemonSearch = "";
        ctrlCardsObject.searchButton.className = "glyphicon glyphicon-search";
        document.getElementById('imageSourceCarousel').style.display = "";
        document.getElementById('searchSourceCarousel').style.display = "none";
        ctrlCardsObject.isSearch = false;
        changeSetName(ctrlCardsObject.lastSet);
    }
    function authenError (currentCardId) {
        document.getElementById("member-"+currentCardId).style.display = "none";
        document.getElementById("nonMember-"+currentCardId).style.display = "";
    }
//========= ./Simple Function ==========//

//================   User Input Function ================//
    $scope.cardClick = function (cardObject) {
        ctrlCardsObject.currentCardObject = cardObject
        ctrlCardsObject.currentCardId = cardObject.id
        ctrlCardsObject.card_db_id = cardObject._id;
        if(!$scope.loggedIn)
            return authenError(ctrlCardsObject.currentCardId)

        document.getElementById("nonMember-"+ctrlCardsObject.currentCardId).style.display = "none"
        document.getElementById("member-"+ctrlCardsObject.currentCardId).style.display = "none"

        CollectionSvc.getSingleQuantity(cardObject._id)
            .then(function (response) {
                if(response !== null){
                    ctrlCardsObject.collection_db_id = response._id;
                    ctrlCardsObject.startingValue = ctrlCardsObject.finishedValue = parseInt(response.quantity) || 0;                    
                } else {
                    ctrlCardsObject.collection_db_id = "";
                    ctrlCardsObject.startingValue = ctrlCardsObject.finishedValue = 0;   
                }
                document.getElementById("member-"+ctrlCardsObject.currentCardId).style.display = "";
                ctrlCardsObject.cardInput = document.getElementById("card-quantity-"+ctrlCardsObject.currentCardId);
                ctrlCardsObject.cardInput.setAttribute("value",ctrlCardsObject.startingValue);
        });

    }
    $scope.handleQuantity = function (theCase) {
        if(theCase === 0) {
            ctrlCardsObject.finishedValue --;
            if (ctrlCardsObject.finishedValue <= 0) {
                ctrlCardsObject.cardInput.value = 0;
                return ctrlCardsObject.finishedValue = 0;
            }
            ctrlCardsObject.cardInput.value = ctrlCardsObject.finishedValue;
        } else if (theCase === 1) {
            ctrlCardsObject.finishedValue++;
            if (ctrlCardsObject.finishedValue<0) {
                ctrlCardsObject.cardInput.value = 0;
                return ctrlCardsObject.finishedValue = 0;
            }
            ctrlCardsObject.cardInput.value = ctrlCardsObject.finishedValue;
        }
        ctrlCardsObject.finishedValue = ctrlCardsObject.cardInput.value;
    }

    $scope.searchCard = function()
    {
        if($scope.PokemonSearch.length < 4 )
            return

        if(ctrlCardsObject.isSearch)
            return clearSearch()

        GetCardSvc.getCardByName($scope.PokemonSearch)
        .then(function(product){
            document.getElementById('imageSourceCarousel').style.display = "none"
            document.getElementById('searchSourceCarousel').style.display = ""
            $scope.searchSource = product
            changeSearchBar()
            return changeSetName($scope.PokemonSearch)
        });
    }

    $scope.set = function(link)
    {
        if(ctrlCardsObject.isSearch)
            clearSearch()

        GetCardSvc.grabSetOfCardsBySet(link.name)
        .then(function(product){
            $scope.imageSource = product
            ctrlCardsObject.lastSet = link.name
            return changeSetName(link.name)
        });
    }
//================ ./User Input Function ================//

//==========   Variables  ===========//
    // ng-model to search pokemon cards
    $scope.PokemonSearch = ""
    // arrays to be stored and linked to a ng-repeat
    $scope.imageSource= []
    // array to be stored in search source
    $scope.searchSource = []
    //
    var ctrlCardsObject = {}
    // grabbing document
    ctrlCardsObject.getTarget = document.getElementById("target")
    // html for caret
    ctrlCardsObject.caret = "<span class='caret'></span>"
    // the currentCardObject that the user has
    ctrlCardsObject.currentCardObject = {}
    // current Id of the card
    ctrlCardsObject.currentCardId = ""
    // value from response
    ctrlCardsObject.startingValue = 0
    // value we increment,decrement or set
    ctrlCardsObject.finishedValue = 0
    // stores isSearch when
    ctrlCardsObject.isSearch = false
    // html object of searchBar
    ctrlCardsObject.searchButton = document.getElementById('searchButton')
    // stores last set that was clicked.
    ctrlCardsObject.lastSet = ""
    //
    ctrlCardsObject.cardInput = {}

    ctrlCardsObject.card_db_id = "";

    ctrlCardsObject.collection_db_id = "";
//========== ./Variables  ===========//


});
