const bodyParser = require("body-parser");
const router = require("express").Router();
const express = require("express");
const session = require("express-session");

router.use(session({secret: "asda0sd-0we1dasj", resave: false, saveUninitialized: true}));
router.use(bodyParser.json());

//allow cross origin requests
router.use(function (req, res, next) {
    "use strict";
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, sid");
    next();
});


router.use("/api", require("./api"));
router.use("/", require("./static"));

module.exports = router;
