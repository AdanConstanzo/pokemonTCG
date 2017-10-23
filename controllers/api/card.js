const router = require("express").Router()
const Cards = require("../../models/Cards");

router.get("/card/:set", function (req, res, next) {
    "use strict";
    Cards.find({pokemonSet: req.params.set})
        .sort({number: 1})
        .exec(function (err, cards) {
            if (err) {
                return next(err);
            }
            res.send(cards);
        });
});

router.get("/card/one/:id", function (req, res, next) {
    "use strict";
    Cards.find({id: req.params.id})
        .exec(function (err, card) {
            if (err) {
                return next(err);
            }
            if (card.length > 0) {
                return res.send(card);
            } else {
                return res.sendStatus(404);
            }
        });
});

router.get("/card/name/:name", function (req, res, next) {
    "use strict";
    Cards.find({name: {"$regex": req.params.name, "$options": "i"}})
        .exec(function (err, cards) {
            if (err) {
                return next(err);
            }
            res.send(cards);
        });
});

router.get("/card/name/:name/rotation/:rotation", function (req, res, next) {
    "use strict";
    if (req.params.rotation === "Standard") {
        Cards.find({name: {"$regex": req.params.name, "$options": "i"}, standardLegal: 1})
            .exec(function (err, cards) {
                if (err) {
                    return next(err);
                }
                res.send(cards);
            });
    } else if (req.params.rotation === "Expanded") {
        Cards.find({name: {"$regex": req.params.name, "$options": "i"}, expandedLegal: 1})
            .exec(function (err, cards) {
                if (err) {
                    return next(err);
                }
                res.send(cards);
            });
    } else {
        Cards.find({name: {"$regex": req.params.name, "$options": "i"}})
            .exec(function (err, cards) {
                if (err) {
                    return next(err);
                }
                res.send(cards);
            });
    }
});

module.exports = router;
