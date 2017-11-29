angular.module("app").service("CollectionSvc", function ($http) {

    var svc = this;

    svc.getCollection = function(UserID){
        return $http.get("/api/collection/getAll/" + UserID)
            .then(function(collection){
                return collection.data;
            });
    }

})
