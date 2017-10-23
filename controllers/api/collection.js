var router = require("express").Router();
var Collection = require("../../models/Collection");

function authenticate(req, res, next) {
    "use strict";
    if (req.session.user) {
        return next();
    }
    return res.sendStatus(401);
}

//returns all collection of user
router.get("/collection/", authenticate, function (req, res, next) {
    "use strict";
    Collection.find({username: req.session.user.username})
        .exec(function (err, collection) {
            if (err) {
                return next(err);
            }
            res.send(collection);
        });
});

// creates a new user based on all user info.
router.post("/collection/", authenticate, function (req, res, next) {
    "use strict";
    var collection = new Collection({
        username: req.session.user.username,
        cardId: req.body.cardId,
        quantity: req.body.value
    });
    collection.save(function (err) {
        if (err) {
            return next(err);
        }
        res.sendStatus(201);
    });
});

// gets quantity from users collection card.
router.get("/collection/quantity/:cardId", authenticate, function (req, res, next) {
    "use strict";
    Collection.find({username: req.session.user.username, cardId: req.params.cardId})
        .exec(function (err, collection) {
            if (err) {
                return next(err);
            }
            res.send(collection);
        });
});

router.put("/collection/", authenticate, function (req, res, next) {
    "use strict";
    Collection.update({
        username: req.session.user.username,
        cardId: req.body.cardId
    }, {
        quantity: req.body.value
    })
        .exec(function (err, collection) {
            if (err) {
                return next(err);
            }
            res.sendStatus(201);
        });
});

router.delete("/collection/:cardId", authenticate, function (req, res, next) {
    "use strict";
    Collection.remove({
        username: req.session.user.username,
        cardId: req.params.cardId
    }, function (err) {
        if (err) {
            return next(err);
        }
        res.sendStatus(201);
    });
});

module.exports = router;
