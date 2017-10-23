angular.module("app").service("SilhouetteSvc", function ($http) {

    var svc = this;

    // returns all silhouette from db.
    svc.getAllSilhouette = function () {
        "use strict";
        return $http.get("/api/silhouette/").then(function (response) {
            return response.data;
        });
    };

})
