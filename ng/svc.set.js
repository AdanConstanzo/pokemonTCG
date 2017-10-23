angular.module("app").service("SetSvc", function ($http) {

    var svc = this;

    svc.getAllSets = function () {
        "use strict";
        return $http.get("/api/sets/")
            .then(function (response) {
                return response.data;
            });
    }

})
