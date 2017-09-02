angular.module('app').controller('RegisterUserImage',function($scope,$location,UserSvc){
  // URL and ID
  ///register-:username-userBanner
  //register_user_images_a_skip
  var RegisterUserImage = {};

  UserSvc.hasSession().then(function(response){
    if(response){
      UserSvc.checkLogIn().then(function(response){
        RegisterUserImage['username'] = response;
        var a_skip = document.getElementById('register_user_images_a_skip');
      })
    }else {
        var error = document.getElementById("register_user_images_loginError");
        error.innerHTML = "Please Login In";
    }
  })
  $scope.Redirect = function(){
    console.log('was');
    $location.path("/register-"+ RegisterUserImage['username'] +"-userBanner")
  }
  //$location.path('/register-'+username+'-userImg');
});
