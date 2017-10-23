angular.module("app").service("GifSvc", function ($http) {

    this.getGif = function (pokemonNumber) {
        "use strict";
        return $http.get("/api/gif/" + pokemonNumber)
            .then(function (response) {
                return response.data;
            });
    }

    this.getAllGifs = function () {
        "use strict";
        return $http.get("/api/gif/")
            .then(function (response) {
            return response.data;
        });
    }

});
