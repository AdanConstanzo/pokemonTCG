const router = require("express").Router();
const Sets = require("../../models/Sets");

router.get("/sets/", function (req, res, next) {
    "use strict";
    Sets.find()
        .sort({number: -1})
        .exec(function (err, sets) {
            if (err) {
                return next(err);
            }
            res.send(sets);
        });
});

module.exports = router;
