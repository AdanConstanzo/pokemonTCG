const router = require("express").Router();
const Silhouette = require("../../models/Silhouette");

router.get("/silhouette/", function (req, res, next) {
    "use strict";
    Silhouette.find()
        .exec(function (err, Sil) {
            if (err) {
                return next(err);
            }
            res.send(Sil);
        });
});

module.exports = router;
