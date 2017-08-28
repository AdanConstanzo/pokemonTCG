angular.module('app').service('GetCardSvc', function ($http) {

    var svc = this

    svc.grabSetOfCardsBySet = function (set) {
        return $http.get('/api/card/'+set)
        .then(function(response)
        {
            return response.data
        })
    };

    svc.getCardByName = function(name)
    {
        return $http.get('/api/card/name/'+name)
        .then(function(response)
        {
            return response.data
        })
    }
    // gets one card by cardId
    svc.getOne= function(id)
    {
    	return $http.get('/api/card/one/'+id)
        .then(function(response)
        {
            return response.data[0]
        })
    }

    svc.getCardWithValues = function(name,rotation){
        return $http.get('/api/card/name/'+name+'/rotation/'+rotation)
        .then(function(response){
            return response.data;
        })
    }
    
    svc.getTypes = function()
    {
        return $http.get('/api/types/')
        .then(function(response)
        {
            return response.data
        })
    }

});
