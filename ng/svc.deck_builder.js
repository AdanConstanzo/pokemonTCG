angular.module("app").service("DeckBuilderSvc", function ($http) {

    var svc = this;

    svc.addDeck = function(DeckName, DeckObject, Username, DeltaObject, DeckSettings){
        "use strict";
        return $http.post("/api/deckbuilder/", {
            DeckName: DeckName,
            DeckObject: DeckObject,
            Username: Username,
            Raiting: 1,
            DeltaObject: DeltaObject,
            DeckSettings: DeckSettings});
    }

    svc.editDeck = function(DeckObject, deckId, DeckName, DeckVisibility, DeltaObject){
        "use strict";
        return $http.put("/api/deckbuilder/edit", {
            _id: deckId,
            DeckName: DeckName,
            DeckObject: DeckObject,
            DeckVisibility: DeckVisibility,
            DeltaObject: DeltaObject
        });
    }

    svc.getMyDecks = function (Username) {
        "use strict";
    	return $http.get("/api/deckbuilder/" + Username)
            .then(function(response){
                return response.data;
    	});
    }

    svc.getUsersPublicDecks = function (Username) {
        "use strict";
        return $http.get("/api/deckbuilder/user/" + Username)
            .then(function (response) {
                return response.data;
        });
    }

    // get's one user's deck. Visibility is true.
    svc.getUsersPublicDeck = function (Username, DeckName) {
        "use strict";
        return $http.get("/api/deckbuilder/user/" + Username + "/" + DeckName)
            .then(function (response) {
                return response.data;
        });
    }

    svc.getAllPublicDecks = function () {
        "use strict";
        return $http.get("/api/deckbuilder")
            .then(function (response) {
                return response.data;
        });
    }

    svc.getDeck = function (_id, deckname) {
        "use strict";
        return $http.get("/api/deckbuilder/get_one/" + _id + "-" + deckname)
            .then(function (response) {
                if (!response) {
                    return false;
                }
                return response.data;
        });
    }

    svc.editPublic = function (deckId, DeckVisibility) {
        "use strict";
        $http.put("/api/deckbuilder/edit/public", {
            _id: deckId,
            DeckVisibility: DeckVisibility
        });
    }

    svc.deleteDeck = function(_id) {
        "use strict";
        $http.delete("/api/deckbuilder/" + _id);
    }

});
