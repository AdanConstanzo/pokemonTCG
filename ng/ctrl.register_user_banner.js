angular.module('app').controller('RegisterUserBanner',function($scope,$location,UserSvc,SilhouetteSvc){

  var RegisterUserBanner = {};
  RegisterUserBanner['banner'] = null;

  UserSvc.CheckRegisterAndLogin("register_user_banner_loginError",RegisterUserBanner)
  .then(function(res){
    if(res)
      UserSvc.checkLogIn().then(function(user){
        $scope.register_user_banner_UserName = user;
        UserSvc.getUserImage(user).then(function(img){
          var imgs = document.getElementById('register_user_banner_profileImage');
          imgs.src = img.userImage;
        });
      });
  });

  SilhouetteSvc.getAllSilhouette().then(function(response){
    $scope.register_user_banner_Silhouettes = response;
    RegisterUserBanner['banner'] = response;
    $scope.register_user_banner_SillouetImage = response[0].imagePath;
    $scope.register_user_banner_SillouetImage_back = response[0].background;
  })

  $scope.SubmitFinish = function(){
    var bannerObject = RegisterUserBanner['banner'];
    UserSvc.SetUserBannerObject(bannerObject);
    UserSvc.destroyRegisterSession();
  }

  $scope.register_user_banner_ChangeSilhouette = function(){
    $('#register_user_banner_modal').modal('show');
  }

  $scope.AssignImage = function(banner){
    var color = banner.background;
    var path  = banner.imagePath;
    RegisterUserBanner['banner'] = banner;
    $scope.register_user_banner_SillouetImage = path;
    $scope.register_user_banner_SillouetImage_back = color;
  }

}); /* End of Controller RegisterUserBanner */
