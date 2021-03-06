const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt    = require("jwt-simple");
const config = require("../../config");
const User   = require("../../models/User");

// a login session to check correct credentials.
router.post("/sessions", function (req, res, next) {
    "use strict";
    var username = req.body.username.toUpperCase();
    User.findOne({usernameLogin: username})
        .select("password")
        .exec(function (err, user) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.sendStatus(401);
            }
            // decrypts the password and then makes sure the token was correct. by jwt
            bcrypt.compare(req.body.password, user.password, function (err, valid) {
                if (err) {
                    return next(err);
                }
                if (!valid) {
                    return res.sendStatus(401);
                }
                // encodes signature to create security
                var token = jwt.encode({usernameLogin: username}, config.secret);
                res.send(token);
            });
        });
});

module.exports = router;
