var router = require('express').Router();
var bcrypt = require('bcrypt');
var jwt    = require('jwt-simple');
var fs     = require('fs');
var _      = require('lodash')
var User   = require('../../models/User');
var Cards  = require('../../models/Cards');
var Silhouette = require('../../models/Silhouette');
var config = require('../../config');
var multer = require('multer');


        /********************/
        /*   Middleware    */
        /********************/

function authenticate(req, res, next) {
    if (req.session.user) { return next() }
    return res.sendStatus(401);
}

        /********************/
        /*   Multer Code    */
        /********************/

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/users/profileImage/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.jpg')
  }
});

var upload = multer({ storage: storage });


        /********************/
        /*   API Calls      */
        /********************/


// Updates user's profile image and delets previous image from upload storage.
// Requires authentication.
// IN: file, Session: user,
router.post('/users/profileImage/',upload.any(),authenticate,function(req,res,next){
  var fileDest;
  if(req.files.length>0){
    fileDest = req.files[0].destination
  }else{
    return res.sendStatus(500);
  }

  fileDest = fileDest.replace("uploads/","");
  var publicPath = fileDest+req.files[0].filename;
  var user = req.session.user.username;
  var oldPath = req.session.user.user_image;
  User.update({username:user},{user_image:publicPath},function(err,docs){
    if(err){return next(err)}
    if(oldPath != 'images/users/blank_user.png')
      fs.unlinkSync(__dirname+'/../../uploads/'+oldPath);
    res.json({status:'success',newUrl:publicPath});
  });
});

// Updates user's Banner Object.
// Requires authentication.
// IN: bannerObject, Session: user, OUT:json success
router.post('/users/SetUserBannerImage/',authenticate,function(req,res,next){
  var user = req.session.user.username;
  var userBanner = req.body.bannerObject;
  User.update({username:user},{user_banner:userBanner},function(err,docs){
    if(err){return next(err)}
    res.json({status:'success',user_banner:userBanner});
  })
})

// grabs a single user by auth.username and creates session.user
// IN: headers, Out: 200
router.get('/users',function (req,res,next) {
    if (!req.headers['x-auth']) {
        return res.sendStatus(401)
    }
    // decodes key to access username object
    var auth = jwt.decode(req.headers['x-auth'],config.secret);
    User.findOne( {usernameLogin: auth.usernameLogin} ,function (err,user) {
        if(err) {return next(err)}
        req.session.user = user
        res.sendStatus(200);
    });
});

// returns session's username
// Requires authentication.
//Session: user, OUT: session's username
router.get('/users/user',authenticate,function (req,res,next) {
    return res.json(req.session.user.username)
});

/********* Needs to be fixed *******/
// Checks to see if user has session.
// Requires authentication.
//Session: user, OUT: Json
router.get('/users/session',function(req,res,next){
    if(!req.session.user)
        res.json(false)
    else
        res.json(true)
})

// Destroys all sessions
// Session:ALL , OUT: status 200
router.get('/users/logout',function(req,res,next){
    req.session.destroy();
    return res.status(200).send()
})

// Destroys register session
//Session: register, OUT: status 200
router.get('/users/register/session/destroy/',function(req,res,next){
  delete req.session.register;
  return res.status(200).send();
})

/********* Needs to be fixed *******/
// Checks to see if register has session.
//Session: register, OUT: Json
router.get('/users/register/session/status',function(req,res,next){
  console.log(req.session.register);
  if(req.session.register === true){
    return res.sendStatus(201);
  }else{
    return res.sendStatus(404);
  }
})

// creates a new user based with user info and create register session
// Also hash password for DB.
// IN: first_name,last_name,username,email; OUT:status
router.post('/users',function(req,res,next){
    var user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        usernameLogin: req.body.username.toUpperCase(),
        user_image: "images/users/blank_user.png",
        user_banner: new Silhouette({
          imagePath:'/images/Silhouette/Charizard.png',
          name:'Charizard',
          background:'#d44027'
        })
    });
    // makes a hash to encrypt password.
    bcrypt.hash(req.body.password,10,function(err,hash){
        if(err) {return next(err)}
        user.password = hash;
        req.session.register = true;
        //saves user to db.
        user.save(function (err) {
            if (err) { return next(err) }
            res.sendStatus(201)
        });
    });
});

// gets current user's information
// Requires authentication.
// IN: params.username, Session: user, OUT:userInfo
router.get('/users/user/:username',authenticate,function(req,res,next){
    if(req.session.user.username == req.params.username)
        User.find({username:req.params.username}).exec(function(err,username){
            if(err){return next(err)}
            res.send(username[0]);
        });
});

// gets users open info
// IN: params.username; OUT:userInfo
router.get('/users/userOpen/:username',function(req,res,next){
  User.find({username:req.params.username}).exec(function(err,userInfo){
      if(err){return next(err)}
      res.send(userInfo[0]);
  });
});

/* NEEDS TO BE FIXED ASAP */
// Updates user_collection?
// Requires authentication.
// IN: cardId; Session: user, OUT: status
router.post('/user/removeElement',function(req,res,next){
    var bodyCardId = req.body.cardId
    User.find({username:req.session.user.username}).exec(function(err,userObject){
        var temp_collection = userObject[0].user_collection
        var index = _.findIndex(temp_collection, function(o) { return o.cardId == bodyCardId; });
        temp_collection.splice(index, 1);
        User.update({username:req.session.user.username},{user_collection:temp_collection},function(err,docs){
            if(err){return next(err)}
            res.sendStatus(201);
        });
    });
});


// Checks for unique username for registering
// IN: params.username; OUT:true/false
router.get('/users/checkUsername/:username',function(req,res,next){
    User.find({username:req.params.username}).exec(function(err,userObject){
        if(userObject[0] != undefined)
            res.send(true);
        else
            res.send(false);
    });
});

// Checks for unique email for registering
// IN: params.email; OUT:true/false
router.get('/users/checkEmail/:email',function(req,res,next){
    User.find({email:req.params.email}).exec(function(err,userObject){
        if(userObject[0] != undefined)
            res.send(true)
        else
            res.send(false)
    });
});

module.exports = router;
