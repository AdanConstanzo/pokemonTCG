angular.module("app").controller("DeckCtrl", function ($scope,$routeParams,DeckBuilderSvc,GetCardSvc,UserSvc) {

  DeckBuilderSvc.getUsersPublicDeck($routeParams.username.slice(1),$routeParams.deckname.slice(1))
  .then(function(response){
    $scope.UserName = response.Username;
    //getUserPublicInfo
    UserSvc.getUserImage(response.Username).then(function(Images){
      $scope.userImage = Images.userImage;
      $scope.userBanner = Images.userBanner.imagePath;
      var backgroundColor = Images.userBanner.background;
      var deck_userRow = document.getElementById('deck_userRow');
      deck_userRow.style.background = backgroundColor;
    });

    $scope.Raiting = response.Raiting;
    $scope.DeckName = response.DeckName;
    $scope.DeckIcon = response.DeckSettings.icon;
    $scope.DeckRotation = response.DeckSettings.rotation;
    var DesciptionBody = document.getElementById('deck_deckDescription');
    DesciptionBody.innerHTML = "<h3>Deck Description</h3><br/><br/>" + response.DeltaObject;
    for(x in response.DeckObject){
      if(x != 'count'){
        GetCardSvc.getOne(x).then(function(card){
          addCard(card,response.DeckObject[card.id]);
        })
      }
    }
  }); // End of getUsersPublicDeck

  function createHtml(CardObject,Quantity){
    var li = document.createElement('li');
    var a  = document.createElement('a');
    var div = document.createElement('div');
    var img = document.createElement('img');
    a.href = '/#/card-'+CardObject.id;
    a.innerHTML = Quantity+" "+CardObject.name;
    img.src = CardObject.imageUrl;
    div.appendChild(img);
    a.appendChild(div);
    li.appendChild(a);
    return li;
  }

  function addCard(CardObject,Quantity){
    var ul;
    if( CardObject.supertype === "Pokémon" ){
      ul = document.getElementById("deck_PokemonCardList");
      $scope.Pokemon += Quantity;
    } else if ( CardObject.supertype === "Trainer" ){
      ul = document.getElementById("deck_TrainerCardList");
      $scope.Trainer += Quantity;
    } else if ( CardObject.supertype === "Energy" ){
      ul = document.getElementById("deck_EnergyCardList");
      $scope.Energy += Quantity;
    }
    ul.appendChild(createHtml(CardObject,Quantity));
  }
  $scope.Energy = 0;
  $scope.Pokemon = 0;
  $scope.Trainer = 0;
});
