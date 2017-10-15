angular.module('app').controller('RegisterUserBanner',function($scope,$location,UserSvc,SilhouetteSvc){

  var RegisterUserBanner = {};
  RegisterUserBanner['banner'] = null;

  UserSvc.checkRegisterStatus()
  .then(function(response){
    UserSvc.checkLogIn().then(function(User){
      $scope.register_user_banner_UserName = User;
      UserSvc.getUserImage(User).then(function(UserImage){
            var img = document.getElementById('register_user_banner_profileImage')
            img.src = UserImage.userImage;
      })
    })
  })

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

  var destoryRegister = function(){
      UserSvc.destroyRegisterSession();
  }

  window.onbeforeunload = destoryRegister;


  window.onhashchange = destoryRegister;


}); /* End of Controller RegisterUserBanner */
