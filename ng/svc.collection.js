angular.module("app").service("CollectionSvc", function ($http) {

    var svc = this;

    svc.getCollection = function(UserID){
        return $http.get("/api/collection/getAll/" + UserID)
            .then(function(collection){
                return collection.data;
            });
    }

    // takes in collection id.
    svc.removeCollection = function(collectionID){
        return $http.delete("/api/collection/deleteSingle/" + collectionID)
            .then(function(response){
                return response.data;
            });
    }

    svc.updateCollection = function(collectionObjject){
        return $http.put("/api/collection/updateQuantity/", collectionObjject)
            .then(function(collection){
                return collection.data;
            });
    }

    svc.getSingleQuantity = function(card_id) {
        return $http.get("/api/collection/getSignleCount/" + card_id)
            .then(function (quant){
                if (quant.data === "") {
                    return null;
                } else {
                    return quant.data;
                }
            });
    }

    svc.postCollection = function(collectionObject) {
        return $http.post("/api/collection/addCard/", collectionObject)
            .then(function (response) {
                return response;
            })
    }

})
