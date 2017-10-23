angular.module("app").service("CollectionSvc", function ($http) {

    var svc = this;

    svc.getUserCollection = function (username) {
        "use strict";
        return $http.get("/api/collection/")
            .then(function (response) {
            return response.data;
        });
    }

    svc.postCollection = function (deckObject, value) {
        "use strict";
        return $http.post("/api/collection/",{
            value: value,
            cardId: deckObject.id
        }).then(function (response) {
            return response.data;
    	});
    }

    svc.getQuantityOfCardFromCollection = function (cardId) {
        "use strict";
        return $http.get("/api/collection/quantity/" + cardId)
            .then(function (response) {
                if (response.data[0] === undefined) {
                    return false;
                }
                return response.data[0].quantity;
        });
    }

    svc.updateCollection = function (deckObject, value) {
        "use strict";
        return $http.put("/api/collection", {
            deckObject: deckObject,
            value: value,
            cardId: deckObject.id})
                .then(function (response) {
                    return response.data;
                });
    }

    svc.removeCollection = function (deckObject) {
        "use strict";
        var cardId = deckObject.id;
        return $http.delete("/api/collection/" + cardId)
            .then(function (response) {
                return response.data
        });
    }

})
