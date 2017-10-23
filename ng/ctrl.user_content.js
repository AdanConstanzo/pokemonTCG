// User Content
// Can be accessed as /#/user-<userName>/
app.controller("UserContentCtrl", function ($scope,$routeParams,UserSvc) {
  var user_content = {};
  user_content.username = $routeParams.username;
  console.log(user_content.username);
  UserSvc.getUserOpenInfo(user_content.username).then(function(res){
    console.log(res);
    $scope.user_content_userName = res.username;
    $scope.user_content_dateSince = "Feburary 2015";
    $scope.user_content_profileImage = res.user_image;
    $scope.user_content_upvotes = 22;

  })
  UserSvc.getFollowerCount(user_content.username)
    .then(function (followers){
        $scope.user_content_followers = followers.count;
    });

});
