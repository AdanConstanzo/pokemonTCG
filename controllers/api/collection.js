var router = require("express").Router();
var Collection = require("../../models/Collection"),
    ObjectID = require('mongodb').ObjectID;

function authenticate(req, res, next) {
    "use strict";
    if (req.session.user) {
        return next();
    }
    return res.sendStatus(401);
}

router.post("/collection/addCard/", authenticate, function(req,res,next) {
    "use strict";
    var col = new Collection({
        user_id: new ObjectID(req.body.user_id),
        card_id: new ObjectID(req.body.card_id),
        quantity: req.body.quantity
    });
    col.save(function (err) {
        if (err) {
            return next(err);
        }
        res.sendStatus(201);
    });
});

router.put("/collection/updateQuantity/:collection_id/:quantity", authenticate, function(req,res,next) {
    "use strict";
    var collectionId = new ObjectID(req.params.collection_id);
    Collection.findByIdAndUpdate({_id: collectionId},{quantity: req.params.quantity},function(err,docs){
        if(err) {
            return next(err);
        }
        res.sendStatus(201);
        return;
    });
});

router.get("/collection/getAll/:userId", function(req, res, next) {
    "use strict";
    var userId = new ObjectID(req.params.userId);
    //TODO: Wrap a try/catch for userId in creation of ObjectID
    Collection.aggregate([
        {
            $match:{user_id:userId}
        },
        {
            $lookup:
            {
                from: "cards",
                localField:"card_id",
                foreignField: "_id",
                as: "Card"
            }
        },
        {
            $addFields: {
                  "Card.quantity": "$quantity"
               }
        },
        {
            $project:{
                Card:{ "$arrayElemAt": [ "$Card", 0 ] }
            }
        }
    ],function(err,collectionList){
        if (collectionList.length > 0) {
            res.send(collectionList);
        } else {
            res.json({"status": "empty set"})
        }
    });
});

router.delete("/collection/deleteSingle/:collection_id", function(req, res, next) {
    "use strict";
    var collectionObjectId = new ObjectID(req.params.collection_id);
    Collection.remove({"_id":collectionObjectId})
        .exec(function(err,doc){
            res.sendStatus(200);
        });
})

module.exports = router;
