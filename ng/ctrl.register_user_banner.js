angular.module('app').controller('RegisterUserBanner',function($scope,$http,$location,UserSvc){
  $scope.submit = function(){
    $http.get('http://localhost:3000/api/users/register/session/')
    .then(function(response){
      console.log(response);
    });
  }
});
