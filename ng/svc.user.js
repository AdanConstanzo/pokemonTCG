angular.module('app').service('UserSvc', function ($http,$q) {

    var svc = this;

    /*
        %%%% Register Services %%%%
    */

    // set user profile page.
    // requires autentication
    svc.SetUserProfileImage = function (Form) {
        return $http.post("api/users/profileImage/", Form,
        {
            transformRequest: angular.identity,
            headers: {"Content-Type": undefined}
        })
            .then(function (response) {
                return response.data;
            });
    }

    // sets a user banner to current user session.
    // uses autentication.
    svc.SetUserBannerObject = function (bannerObject) {
        return $http.post("api/users/SetUserBannerImage", {bannerObject: bannerObject});
    };


    // destroyes register session.
    svc.destroyRegisterSession = function(){
        return $http.get("api/users/register/session/destroy/").then(function (res) {
            return res.data;
      });
    }

    // responds 200 or 404 based on register session.
    svc.checkRegisterStatus = function () {
        "use strict";
        return $http.get("api/users/register/session/status/")
            .then(function (response) {
                return response;
            });
    };

    // checks if there is currently a user with identical username.
    // response with true or false.
    svc.checkUsername = function(username){
        username = username.toUpperCase();
        return $http.get('/api/users/checkUsername/'+username).then(function(response){
            return response.data;
        });
    };

    // checks if there is currently a user with identical email.
    // response with true or false.
    svc.checkEmail = function(email) {
        return $http.get("/api/users/checkEmail/" + email)
        .then(function (response) {
            return response.data;
        });
    };

    // register a user
    svc.register = function (first_name, last_name, username, password, email) {
        "use strict";
        return $http.post("/api/users", {
            first_name: first_name,
            last_name: last_name,
            username: username,
            password: password,
            email: email
        }).then(function () {
            return svc.login(username, password);
        });
    };

    /*
        %%%% Log In Services %%%%
    */

    // Only use to login a user.
    // get current users info
    // requires autentication
    svc.getUser = function () {
        "use strict";
        return $http.get("/api/users")
            .then(function (response) {
                return response.data
            })
    };

    // log them in & sets local storage
    svc.login = function (username, password) {
        "use strict";
        // get signature from post
        return $http.post("/api/sessions", {
            username: username,
            password: password
        })
            .then(function (response) {
                // sets the x-auth to later compare in getUser
                $http.defaults.headers.common["X-Auth"] = response.data;
                return svc.getUser();
            }, function(err){
                return err;
            });
    };

    // Logs out a user.
    svc.logout = function () {
        "use strict";
        return $http.get("/api/users/logout")
            .then(function (response) {
                return response;
            });
    }

    // Checks to see if there is a user session.
    // Returns 200 or 401
    svc.checkUserSession = function () {
        "use strict";
        return $http.get("/api/users/user")
            .then(function (response) {
                return response;
        });
    };

    // check session and returns current username.
    svc.returnSessionUserName = function () {
        "use strict";
        return $http.get("/api/users/session")
            .then(function (response) {
                return response.data;
            });
    }

    svc.returnSessionUserID = function() {
        return $http.get("/api/users/session/id/")
            .then(function (_id){
                return _id.data;
            })
    }

    /*
        %%%% Grabbing User's Information %%%%
    */

    // returns users open information such as
    // first name, last name, username, user image, etc.
    // or return error message if can't find.
    svc.getUserOpenInfo = function (username) {
        return $http.get("/api/users/userOpen/" + username)
            .then(function (response) {
                return response.data;
            });
    }

    // grabs all images from username
    svc.getUserImage = function (username) {
        return svc.getUserOpenInfo(username)
            .then(function (userInfo) {
                "use strict";
                var images = {};
                images["userImage"] = userInfo["user_image"];
                images["userBanner"] = userInfo["user_banner"];
                return images;
      });
    }

    svc.getFollowerCount = function (username) {
        "use strict";
        return $http.get("/api/users/follower/count/" + username)
            .then(function (userCount) {
                return userCount.data;
            });
    }

    svc.getFollowingCount = function (username) {
        "use strict";
        return $http.get("/api/users/following/count/" + username)
            .then(function (userCount){
                return userCount.data;
            });
    }

})
