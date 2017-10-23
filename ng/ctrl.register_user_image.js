angular.module('app').controller('RegisterUserImage',function($scope,$location,$http,UserSvc){

  $scope.Register_User_Image_userImage = "/images/users/blank_user.png";

  var RegisterUserImage = {};

  UserSvc.checkRegisterStatus();

  $scope.Redirect = function(){
    $location.path("/register-userBanner")
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

  var destoryRegister = function(){
      UserSvc.destroyRegisterSession();
  }




  window.onhashchange = function(event){
    if(event.newURL != "http://localhost:3030/#/register-userBanner")
      destoryRegister();
  }

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
