angular.module('app').controller('LoginCtrl',function($scope,UserSvc,$location){

    function handleHtmlError()
    {
        $scope.showView = true   
    }

    // function to log in user
    $scope.login = function (username, password) {
        UserSvc.login(username, password)
        .then(function (response) {
            if(response.status === 401)
                return handleHtmlError()
            $location.path('/')
            window.location.reload();
        })
    };

});