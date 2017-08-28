angular.module('app').controller('RegisterCtrl',function($scope,$location,UserSvc){

    // register user that talks to service
    $scope.register = function(first_name,last_name,username,password,email){
    	UserSvc.register(first_name,last_name,username,password,email)
        .then(function (user) {
            $scope.$emit('login',user);
            //$location.path('/');
            window.location.reload();
        });

    };

    $scope.checkUniqueUser = function(){
    	UserSvc.checkUsername($scope.username)
    	.then(function(response){
    		$scope.notUniqueUser = response
        console.log($scope.notUniqueUser);
    	});
    }

    $scope.checkUniqueEmail = function(email){
    	UserSvc.checkEmail(email)
    	.then(function(response)
    	{
    		$scope.notUniqueEmail = response
    	})
    }

    $scope.notUniqueEmail = false
    $scope.notUniqueUser = false
});
