angular.module("app").controller("ApplicationCtrl", function ($scope, UserSvc, $location, $rootScope) {

    $scope.logout = function(){
        "use strict";
        UserSvc.logout()
            .then(function (response) {
                $location.path("/");
                window.location.reload();
            });
        $scope.currentUser = null;
        localStorage.clear();
    };

    UserSvc.returnSessionUserName()
        .then(function (response) {
            "use strict";
            if (response) {
                $scope.currentUser = response;
                UserSvc.returnSessionUserID()
                    .then(function (response) {
                        $rootScope.user_id = response;
                    });
            }
        });

});
