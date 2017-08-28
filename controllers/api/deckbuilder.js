var router = require('express').Router();
var render = require('quill-render');
var DeckBuilder = require('../../models/Deckbuilder');


function authenticate(req, res, next) {
    if (req.session.user) { return next() }
    return res.sendStatus(401)
}

router.post('/deckbuilder/',function (req,res,next) {
  var deckbuilder = new DeckBuilder({
      DeckName: req.body.DeckName,
      DeckObject: req.body.DeckObject,
      Username: req.body.Username,
      DeckSettings: req.body.DeckSettings,
      Raiting: req.body.Raiting,
      DeltaObject: req.body.DeltaObject
  });
  deckbuilder.save(function (err) {
      if (err) { return next(err) }
      res.sendStatus(201);
  });
});

router.get('/deckbuilder/',function(req,res,next){
  DeckBuilder.find({DeckVisibility:true})
  .exec(function(err,decks)
  {
    if(err){return next(err)}
    res.send(decks);
  })
})

router.get('/deckbuilder/user/:Username',function(req,res,next)
{
  DeckBuilder.find( { Username: req.params.Username, DeckVisibility: true })
  .exec(function(err,decks)
  {
    if(err){return next(err)}
    res.send(decks);
  })
})

router.get('/deckbuilder/:Username',authenticate,function(req,res,next)
{
	DeckBuilder.find({Username:req.params.Username})
	.exec(function(err,decks)
	{
		if(err){return next(err)}
		res.send(decks)
	})
})

router.get('/deckbuilder/get_one/:_id'+'-'+':deckname',function(req,res,next)
{
  DeckBuilder.find({_id:req.params._id, DeckVisibility:true, DeckName: req.params.deckname})
  .exec(function(err,deck)
  {
    if(err){return next(err)}

    if(deck.length == 0)
    {
      return res.send(false)
    }

    deck[0].DeltaObject = render(deck[0].DeltaObject.ops)
    res.send(deck);
  })
})

// connected to getUsersPublicDeck.
// get's one user's deck. Visibility is true.
router.get('/deckbuilder/user/:Username/:DeckName',function(req,res,next){
  DeckBuilder.find({DeckName:req.params.DeckName,Username:req.params.Username})
  .exec(function(err,deck){
    if(err){return next(err)}
    if(deck.length>0){
      deck[0].DeltaObject = render(deck[0].DeltaObject.ops);
      if(!deck[0].DeckSettings.visibility)
        res.sendStatus(401);
      else
        res.send(deck[0]);
    }else{
      res.sendStatus(404);
    }
  })
});

router.delete('/deckbuilder/:id',function(req,res,next){
    DeckBuilder.remove({_id:req.params.id},function(err){
        if(err) {return next(err)}
    })
})

router.put('/deckbuilder/edit/',function (req,res,next) {
    DeckBuilder.findByIdAndUpdate({ _id : req.body._id } ,{ DeckName: req.body.DeckName, DeckObject:req.body.DeckObject, count:req.body.count, DeckPublic: req.body.DeckPublic },function(err,docs){
        if(err) {next(err)}
    });
});

router.put('/deckbuilder/edit/public',function(req,res,next){
  DeckBuilder.findByIdAndUpdate( { _id: req.body._id },{ DeckVisibility: req.body.DeckVisibility },function(err){
    if(err){next(err)};
  })
})

module.exports = router;
