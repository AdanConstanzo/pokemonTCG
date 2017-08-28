angular.module('app').service('UserSvc', function ($http,$q) {

    var svc = this;

    svc.checkUsername = function(username){
        username = username.toUpperCase();
        console.log(username);
        return $http.get('/api/users/checkUsername/'+username)
        .then(function(response){
            return response.data;
        });
    };

    svc.checkEmail = function(email)
    {
        return $http.get('/api/users/checkEmail/'+email)
        .then(function(response)
        {
            return response.data
        })
    }

    // get a user
    svc.getUser = function () {
        return $http.get('/api/users')
            .then(function (response) {
                return response.data
            })
    };

    // log them in & sets local storage
    svc.login = function (username, password) {
        // get signature from post
        return $http.post('/api/sessions', {
            username: username, password: password})
        .then(function (response) {
            // sets the x-auth to later compare in getUser
            $http.defaults.headers.common['X-Auth'] = response.data;
            return svc.getUser()
        },function(err)
        {
            return err
        })
    };

    // register a user
    svc.register = function (first_name,last_name,username,password,email) {
        return $http.post('/api/users',{
            first_name: first_name, last_name:last_name, username: username, password:password,email:email
        }).then(function () {
            return svc.login(username,password);
        })
    };

    // get user's info wiht username
    svc.getUserPublicInfo = function(username)
    {
        return $http.get('/api/users/user/'+username)
        .then(function(response)
        {
            return response.data
        })
    }

    svc.logout = function()
    {
        return $http.get('/api/users/logout')
    }

    // return session's username
    svc.checkLogIn = function () {
        return $http.get('/api/users/user')
        .then(function(response)
        {
            return response.data
        })
    };

    // check for session.
    svc.hasSession = function()
    {
        return $http.get('/api/users/session')
        .then(function(response)
        {
            return response.data
        })
    }

    svc.deleteSingleCard = function(cardId)
    {
        return $http.post('/api/user/removeElement',{cardId:cardId})
        .then(function(response)
        {
            return response.data
        })
    }

})
