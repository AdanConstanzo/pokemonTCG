angular.module('app').service('SilhouetteSvc', function ($http) {

    var svc = this;

    svc.getAllSilhouette = function () {
        return $http.get('/api/silhouette/').then(function(response){
            return response.data
        });
    };

})
