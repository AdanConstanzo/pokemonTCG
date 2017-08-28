var bodyParser = require('body-parser');
var router = require('express').Router();
var express = require('express')
var session = require('express-session')

router.use(session({secret:"asda0sd-0we1dasj",resave:false,saveUninitialized:true}))
router.use(bodyParser.json());

router.get('/',function(req,res){
    res.render('index.html.ejs')
});

router.use('/api',require('./api'));
router.use('/',require('./static'));

module.exports = router;