var router = require('express').Router();
var bcrypt = require('bcrypt');
var jwt    = require('jwt-simple');
var fs     = require('fs');
var _      = require('lodash')
var User   = require('../../models/User');
var Cards  = require('../../models/Cards');
var config = require('../../config');

function authenticate(req, res, next) {
    if (req.session.user) { return next() }
    return res.sendStatus(401);
}


var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/users/profileImage/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.jpg')
  }
})

var upload = multer({ storage: storage })

// only works when user wants to change profile pic
router.post('/users/profileImage',authenticate,upload.any(),function(req,res,next){
  console.log(req.files);
  var fileDest = req.files[0].destination;
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
})

// grabs a single user by auth.username
router.get('/users',function (req,res,next) {
    if (!req.headers['x-auth']) {
        return res.sendStatus(401)
    }
    // decodes key to access username object
    var auth = jwt.decode(req.headers['x-auth'],config.secret);
    User.findOne( {usernameLogin: auth.usernameLogin} ,function (err,user) {
        if(err) {return next(err)}
        req.session.user = user
        res.json(user);
    })
});

// checks if user has a session
router.get('/users/user',function (req,res,next) {
    if(!req.session.user)
    {
        return res.sendStatus(401)
    }
    return res.json(req.session.user.username)
});

// checks if there is a session
router.get('/users/session',function(req,res,next){
    if(!req.session.user)
        res.json(false)
    else
        res.json(true)
})

// destroy sessions
router.get('/users/logout',function(req,res,next){
    req.session.destroy();
    return res.status(200).send()
})

router.get('/users/register/session/',function(req,res,next){
  delete req.session.register;
  return res.status(200).send();
})

router.get('/users/register/session/status',function(req,res,next){
  if(req.session.register)
    res.json({fuck:'you'});
  else
    res.json({da:'fuq'});
  console.log(req.session.register);
})

// creates a new user based on all user info.
router.post('/users',function(req,res,next){
    var user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        usernameLogin: req.body.username.toUpperCase(),
        user_image: "images/users/blank_user.png"
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
// requires autentication
router.get('/users/user/:username',authenticate,function(req,res,next)
{
    if(req.session.user.username == req.params.username)
        User.find({username:req.params.username})
        .exec(function(err,username)
        {
            if(err){return next(err)}
            res.send(username[0])
        })
})

// gets users open info
router.get('/users/userOpen/:username',function(req,res,next){
  User.find({username:req.params.username}).exec(function(err,userInfo){
      if(err){return next(err)}
      res.send(userInfo[0]);
  });
});

function authenticate(req, res, next) {

    if (req.session.user) {
        return next()
    }
    else {
        return res.sendStatus(401)
    }
}

router.post('/user/removeElement',function(req,res,next)
{
    var bodyCardId = req.body.cardId

    User.find({username:req.session.user.username})
    .exec(function(err,userObject)
    {
        var temp_collection = userObject[0].user_collection
        var index = _.findIndex(temp_collection, function(o) { return o.cardId == bodyCardId; });
        temp_collection.splice(index, 1);
        User.update({username:req.session.user.username},{user_collection:temp_collection},function(err,docs)
        {
            if(err){return next(err)}
            res.sendStatus(201)
        })
    })
})

// returns ture/false based on unquie user
router.get('/users/checkUsername/:username',function(req,res,next)
{
    User.find({username:req.params.username})
    .exec(function(err,userObject)
    {
        if(userObject[0] != undefined)
            res.send(true)
        else
            res.send(false)
    })
})

router.get('/users/checkEmail/:email',function(req,res,next)
{
    User.find({email:req.params.email})
    .exec(function(err,userObject)
    {
        if(userObject[0] != undefined)
            res.send(true)
        else
            res.send(false)
    })
})

module.exports = router;
