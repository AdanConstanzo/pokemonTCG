angular.module('app').controller('RegisterUserImage',function($scope,$location,UserSvc,$http){

  $scope.Register_User_Image_userImage = "/images/users/blank_user.png";

  var RegisterUserImage = {};

  UserSvc.CheckRegisterAndLogin("register_user_images_loginError",RegisterUserImage);

  $scope.Redirect = function(){
    $location.path("/register-"+ RegisterUserImage['username'] +"-userBanner")
  }

  $scope.uploadFile = function(){
    var formData = new FormData;
    var nextStep = document.getElementById('register_user_images_a_skip');
    nextStep.innerHTML = "Next Step";
    var file = $('#register_user_images_file')[0].files[0];
    formData.append('image',file);
    var headers = { transformRequest:angular.identity, headers:{'Content-Type':undefined} };
    UserSvc.SetUserProfileImage(formData);
  };// End of uploadFile

});// End of Controller

angular.module('app').directive('customOnChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.customOnChange);
      element.bind('change', onChangeHandler);
    }
  };
}); // End of directive 'customOnChange'
