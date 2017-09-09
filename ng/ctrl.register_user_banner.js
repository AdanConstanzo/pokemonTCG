angular.module('app').controller('RegisterUserBanner',function($scope,$http,$location,UserSvc,SilhouetteSvc){

  UserSvc.hasSession().then(function(response){
    if(response){
      UserSvc.checkLogIn().then(function(user){
        $scope.register_user_banner_UserName = user;
        UserSvc.getUserImage(user).then(function(img){
          var imgs = document.getElementById('register_user_banner_profileImage');
          imgs.src = img;
        });
      })
    }else {
        var error = document.getElementById("register_user_banner_loginError");
        error.innerHTML = "Please Login In";
    }
  });
  /*
  UserSvc.CheckRegister().then(function(response){
    if(!response){
      var error = document.getElementById("register_user_banner_loginError");
      error.innerHTML = "You already Register";
    }
  })
  */

  SilhouetteSvc.getAllSilhouette().then(function(response){
    $scope.register_user_banner_Silhouettes = response;
    $scope.register_user_banner_SillouetImage = response[0].imagePath;
    $scope.register_user_banner_SillouetImage_back = response[0].background;
  })

  $scope.register_user_banner_ChangeSilhouette = function(){
    $('#register_user_banner_modal').modal('show');
  }

  $scope.AssignImage = function(banner){
    var color = banner.background;
    var path  = banner.imagePath;
    $scope.register_user_banner_SillouetImage = path;
    $scope.register_user_banner_SillouetImage_back = color;
  }

}); /* End of Controller RegisterUserBanner */
