var router = require('express').Router();
var Gifs = require('../../models/Gifs');

// return gif from pokemonNumber
router.get('/gif/:pokemonNumber',function (req,res,next) {
  Gifs.find({pokemonNumber:req.params.pokemonNumber})
   .exec(function(err,gif){
       if(err){return next(err)}
       res.send(gif)
   })
});

router.get('/gif/',function(req,res,next)
{
  Gifs.find()
  .exec(function(err,gifs){
    if(err){return next(err)}
    res.send(gifs)
  })
})

module.exports = router;
