const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt    = require("jwt-simple");
const fs     = require("fs");
const _      = require("lodash")
const User   = require("../../models/User");
const Cards  = require("../../models/Cards");
const Silhouette = require("../../models/Silhouette");
const config = require("../../config");
const path   = require("path");
const multer = require("multer");


        /********************/
        /*   Middleware    */
        /********************/

function authenticate(req, res, next) {
    "use strict";
    if (req.session.user) {
        return next();
    }
    return res.sendStatus(401);
}

        /********************/
        /*   Multer Code    */
        /********************/

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/users/profileImage/");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage });


        /********************/
        /*   API Calls      */
        /********************/


//Connects to SetUserProfileImage from UserSvc service.
// Updates user's profile image and delets previous image from upload storage.
// Requires authentication.
// IN: file, Session: user,
router.post("/users/profileImage/", upload.any(), authenticate, function (req, res, next) {
    "use strict";
    var fileDest;
    if (req.files.length > 0) {
        fileDest = req.files[0].destination;
    } else {
        return res.sendStatus(500);
    }
    fileDest = fileDest.replace("uploads/", "");
    var publicPath = fileDest + req.files[0].filename;
    var user = req.session.user.username;
    var oldPath = req.session.user.user_image;
    User.update({username: user}, {user_image: publicPath}, function (err, docs) {
        if (err) {
            return next(err);
        }
        if (oldPath !== "images/users/blank_user.png") {
          fs.unlinkSync(__dirname + "/../../uploads/" + oldPath);
        }
        res.json({
            status: "success",
            newUrl: publicPath
        });
    });
});

// Connects to SetUserBannerObject from UserSvc service.
// Updates user's Banner Object.
// Requires authentication.
// IN: bannerObject, Session: user, OUT:json success
router.post("/users/SetUserBannerImage/", authenticate, function (req, res, next) {
    "use strict";
    var user = req.session.user.username;
    var userBanner = req.body.bannerObject;
    User.update({username: user}, {user_banner: userBanner}, function (err, docs) {
        if (err) {
            return next(err);
        }
        res.json(
            {
                status: "success",
                user_banner: userBanner
            }
        );
    });
});

// Connects to getUser form UserSvc service.
// grabs a single user by auth.username and creates session.user
// IN: headers, Out: 200
router.get("/users", function (req, res, next) {
    "use strict";
    if (!req.headers["x-auth"]) {
        return res.sendStatus(401);
    }
    // decodes key to access username object
    var auth = jwt.decode(req.headers["x-auth"],config.secret);
    User.findOne({usernameLogin: auth.usernameLogin}, function (err, user) {
        if (err) {
            return next(err);
        }
        req.session.user = user;
        res.sendStatus(200);
    });
});

// Connects to checkUserSession from UserSvc service.
// Checks to see if user has session.
router.get("/users/user", function (req, res, next) {
    "use strict";
    if (req.session.user !== undefined) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});

// Connects to returnSessionUserName from UserSvc service
// returns session's username
router.get("/users/session", function (req, res, next) {
    "use strict";
    if (req.session.user === undefined) {
        res.json(null);
    } else {
        res.json(req.session.user.username);
    }
});

// Connects to logout from UserSvc service.
// Destroys all sessions
// Session:ALL , OUT: status 200
router.get("/users/logout", function (req, res, next) {
    "use strict";
    req.session.destroy();
    return res.status(200).send();
});

// Connects to destroyRegisterSession from UserSvc service.
// Destroys register session
//Session: register, OUT: status 200
router.get("/users/register/session/destroy/", function (req, res, next) {
    "use strict";
    delete req.session.register;
    return res.status(200).send();
});

// Connects to checkRegisterStatus service.
// Checks to see if register has session.
//Session: register, OUT: Json
router.get("/users/register/session/status", function (req, res, next) {
    "use strict";
    if (req.session.register) {
        return res.sendStatus(200);
    } else {
        return res.sendStatus(404);
    }
});

// Connects to register from UserSvc service.
// creates a new user based with user info and create register session
// Also hash password for DB.
// IN: first_name,last_name,username,email; OUT:status
router.post("/users", function (req, res, next) {
    "use strict";
    var user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        usernameLogin: req.body.username.toUpperCase(),
        user_image: "images/users/blank_user.png",
        following_count: 0,
        followers_count: 0,
        user_banner: new Silhouette({
            imagePath: "/images/Silhouette/Charizard.png",
            name: "Charizard",
            background: "#d44027"
        })
    });
    // makes a hash to encrypt password.
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        req.session.register = true;
        //saves user to db.
        user.save(function (err) {
            if (err) {
                return next(err);
            }
            res.sendStatus(201);
        });
    });
});

// Connects to getUserOpenInfo from UserSvc service.
// gets users open info
// IN: params.username; OUT:userInfo
router.get("/users/userOpen/:username", function (req, res, next) {
    "use strict";
    User.find({username: req.params.username})
        .exec(function (err, userInfo) {
            if (err) {
                return next(err);
            }
            if (typeof userInfo[0] === "object") {
                res.send(userInfo[0]);
            } else {
                res.json({
                    error: "no user with name " + req.params.username + " in database"
                });
            }

            next();
        });
});

// Connects to checkUsername from UserSvc service.
// Checks for unique username for registering
// IN: params.username; OUT:true/false
router.get("/users/checkUsername/:username", function (req, res, next) {
    "use strict";
    User.findOne({username: req.params.username})
        .exec(function (err, userObject) {
            if (err) {
                return next(err);
            }
            if (userObject !== null) {
                res.send(true);
            } else {
                res.send(false);
            }
        });
});

// Connects to checkEmail from UserSvc service.
// Checks for unique email for registering
// IN: params.email; OUT:true/false
router.get("/users/checkEmail/:email", function (req, res, next) {
    "use strict";
    User.findOne({email: req.params.email})
        .exec(function (err, userObject) {
            if (err) {
                return next(err);
            }
            if (userObject !== null) {
                res.send(true);
            } else {
                res.send(false);
            }
        });
});

router.get("/users/follower/count/:username", function (req, res, next) {
    "use strict";
    User.findOne({username: req.params.username})
        .select("count")
        .exec(function (err, userCount){
            if (err) {
                return next(err);
            }
            if (userCount === null) {
                res.send(0);
            } else {
                res.send(userCount);
            }
        });
});

module.exports = router;
