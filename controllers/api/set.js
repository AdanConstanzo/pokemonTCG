var router = require('express').Router();
var Sets = require('../../models/Sets');

router.get('/sets/',function(req,res,next)
{
  Sets.find()
  .sort({number:-1})
  .exec(function(err,sets){
    if(err){return next(err)}
    res.send(sets)
    console.log(sets);
  })
})

module.exports = router;
