const router = require("express").Router()
const Types = require("../../models/Types");

router.get("/types/", function (req, res, next) {
    "use strict";
    Types.find()
        .exec(function (err, response) {
            if (err) {
                return next(err);
            }
            res.send(response);
        });
});

module.exports = router;
