var router = require('express').Router()
var Types = require('../../models/Types');

router.get('/types/',function(req,res,next)
{
  Types.find()
  .exec(function(err,response)
  {
    if(err){return next(err)}
    res.send(response)
  })
})

module.exports = router;
