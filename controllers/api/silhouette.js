var router = require('express').Router();
var Silhouette = require('../../models/Silhouette');

router.get('/silhouette/',function(req,res,next){
  Silhouette.find().exec(function(err,Sil){
    if(err){return next(err)}
    res.send(Sil);
  });
});

module.exports = router;
