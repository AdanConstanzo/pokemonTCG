var router = require('express').Router();
var bcrypt = require('bcrypt');
var jwt    = require('jwt-simple');
var _      = require('lodash')
var User   = require('../../models/User');
var Cards  = require('../../models/Cards');
var config = require('../../config');

/* Multer Pratice */

var multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.jpg')
  }
})

var upload = multer({ storage: storage })

router.post('/users/profileImage', upload.single('profileImage'), function (req, res, next) {

  res.json({success:true,message:'Image Saved!'})
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
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
router.get('/users/logout',function(req,res,next)
{
    req.session.destroy();
    return res.status(200).send()
})

// creates a new user based on all user info.
router.post('/users',function(req,res,next){
    var user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        usernameLogin: req.body.username.toUpperCase()
    });
    // makes a hash to encrypt password.
    bcrypt.hash(req.body.password,10,function(err,hash){
        if(err) {return next(err)}
        user.password = hash;
        //saves user to db.
        user.save(function (err) {
            if (err) { return next(err) }
            res.sendStatus(201)
        });
    });
});

// gets user's public info
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
