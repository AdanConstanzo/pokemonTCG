angular.module('app').service('GifSvc', function ($http) {

    this.getGif = function (pokemonNumber) {
        return $http.get('/api/gif/'+pokemonNumber)
        .then(function(response)
        {
            return response.data
        })
    };

    this.getAllGifs = function()
    {
        return $http.get('/api/gif/')
        .then(function(response)
        {
            return response.data
        })
    }
})
