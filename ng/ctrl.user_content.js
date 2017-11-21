// User Content
// Can be accessed as /#/user-<userName>/
app.controller("UserContentCtrl", function ($scope,$routeParams,UserSvc) {
    var user_content = {};
    user_content.previouLi = "member";
    user_content.username = $routeParams.username;
    user_content.nav_pill = {};
    UserSvc.getUserOpenInfo(user_content.username).then(function(res){
        $scope.user_content_userName = res.username;
        $scope.user_content_dateSince = "Feburary 2015";
        $scope.user_content_profileImage = res.user_image;
        $scope.user_content_upvotes = 22;
    });
    UserSvc.getFollowerCount(user_content.username)
        .then(function (followers){
            $scope.user_content_followers = followers.count;
        });

    UserSvc.getFollowingCount(user_content.username)
        .then(function (following){
            $scope.user_content_following = following.count;
        });

    $scope.liClick = function (liId) {
        "use strict";
        if (liId !== user_content.previouLi) {
            document.getElementById("user_content_li_" + user_content.previouLi).className = "";
            document.getElementById("user_content_div_" + user_content.previouLi).style.display = "none";
            document.getElementById("user_content_li_" + liId).className = "active";
            document.getElementById("user_content_div_" + liId).style.display = "block";
            user_content.previouLi = liId;
        }
    }


});
