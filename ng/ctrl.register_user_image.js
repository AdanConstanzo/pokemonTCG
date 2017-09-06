angular.module('app').controller('RegisterUserImage',function($scope,$location,UserSvc,$http){
  $scope.Register_User_Image_userImage = "/images/users/blank_user.png";

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
    $location.path("/register-"+ RegisterUserImage['username'] +"-userBanner")
  }
  //$location.path('/register-'+username+'-userImg');
  $scope.add = function() {
    console.log("WASUP");

    var f = document.getElementById('register_user_images_file').files[0],
        r = new FileReader();

    r.onloadend = function(e) {
      var data = e.target.result;
      UserSvc.SetUserProfileImage(data);
      //send your binary data via $http or $resource or do anything else with it
    }

    r.readAsBinaryString(f);
}

  $scope.submit = function(){
    var formData = new FormData;
    var nextStep = document.getElementById('register_user_images_a_skip');
    nextStep.innerHTML = "Next Step";
    var file = $('#register_user_images_file')[0].files[0];
    formData.append('image',file);


    $http.post('http://localhost:3000/api/users/profileImage/',formData,{
      transformRequest:angular.identity,
      headers:{
        'Content-Type':undefined
      }
    }).then(function(res){
      $scope.Register_User_Image_userImage = res.data.newUrl;
    })

  };

  $http.get('http://localhost:3000/api/users/register/session/status/')
  .then(function(response){
    console.log(response.data);
  })

});
