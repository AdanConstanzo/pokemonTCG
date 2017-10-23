var app = angular.module("app");
app.controller("DeckBuilderCtrl", function ($scope,$compile,$location,GetCardSvc,UserSvc,SetSvc,DeckBuilderSvc,GifSvc) {

	if(!localStorage.getItem("DeckBuilding")){
		localStorage.setItem("DeckBuilding",'{"count":0}');
	}

	// gets all sets
	SetSvc.getAllSets()
	.then(function(sets){
		$scope.Sets = sets;
		$scope.changeSet(sets[0].name)
	});

	//types
	GetCardSvc.getTypes()
	.then(function(types){
		$scope.types = types;
		var div = document.getElementById('deck_builder_submit_icon');
		for(x in types){
			deckBuilderObject.controllerType[types[x].pokemonType] = false
			var img = document.createElement('img');
			img.src = types[x].imageUrl;
			img.id = "deck_builder_submit_icon_"+types[x].pokemonType;
			img.className = 'deck_builder_submit_icon';
			img.setAttribute('ng-click','deckIcon("'+img.id+'")');
			deckBuilderObject.deckIcon[img.id] = false;
			div.appendChild(img);
			$compile(img)($scope);
		}
	})

	updateDeckView();

//=========   Simple Function ==========//
	function addCard(CardId,SuperType,CardName){
		calculateValue(SuperType,1);
		var letterType = SuperType[0]
		var cardId = CardId.replace("card-", "");
    	if(document.getElementById("deckcard-count-"+letterType+"-"+cardId)){
    		var span = document.getElementById("deckcard-count-"+SuperType[0]+"-"+cardId)
    		var num = parseInt(span.innerHTML);
    		num = num + 1;
    		span.innerHTML = num.toString();

    		setToLocalStorage("DeckBuilding",span.id,num);
    		return;
    	}

    	var a = document.createElement("a");
    	a.href = "/#/"+CardId;
    	a.setAttribute("target","_blank");
    	a.setAttribute("ng-click","removeCard('"+CardId+"','"+SuperType+"')")
    	var span = document.createElement("span")
    	var img = document.createElement("img");
    	var imgCardId = CardId.replace("card-","").replace("-","/");
    	var iId = "deckcard-count-"+letterType+"-"+cardId;
    	a.innerHTML = "<i id='"+iId+"'> 1 </i> "+ CardName + " - " + cardId;
    	img.src = "/images/cards/"+imgCardId+".png";
    	span.appendChild(img);
    	a.appendChild(span);
    	var li = document.createElement("li")
    	li.appendChild(a);
    	li.className = "cardListLi";
    	document.getElementById(SuperType+"-ul").appendChild(li);
    	$compile(a)($scope)
    	setToLocalStorage("DeckBuilding",iId,1);
    }

	// applies filter for energy
	function applyEnergyFilter(){
		var tdbobj = deckBuilderObject
		var filterCards = []
		var newSetCode = tdbobj.currentSet;
		for(x in tdbobj.controllerType)
			if(tdbobj.controllerType[x]){
				newSetCode+="-"+x
				for(y in tdbobj.currentCards)
					for(z in tdbobj.currentCards[y].types)
						if(tdbobj.currentCards[y].types[z] === x)
							filterCards.push(tdbobj.currentCards[y])
			}
		formSlider(filterCards,newSetCode);
	}

	function applyNavFilter(){
		var tdbobj = deckBuilderObject;
		var newSetCode = tdbobj.currentSet;
		var filterCards = [];
		for(x in tdbobj.controllerNav)
			if(tdbobj.controllerNav[x])
				if(x == "Pokémon Tool")
					newSetCode +="-"+"Pokémon_Tool";
				else
					newSetCode +="-"+x;

		for(x in tdbobj.currentCards)
			for(y in tdbobj.controllerNav)
				if(tdbobj.controllerNav[y])
					if(tdbobj.currentCards[x].subtype == y)
						filterCards.push(tdbobj.currentCards[x]);
		formSlider(filterCards,newSetCode);
	}

	function applySearchFilter(cards){
		var setCode = "-";
		if(deckBuilderObject.rotation)
			setCode += deckBuilderObject.rotation;
		var newSetCode = $scope.searchCard + setCode;
		formSlider(cards,newSetCode);
	}

	function calculateValue(SuperType,Value){
    	var temp = document.getElementById(SuperType+"-Count");
    	var num = parseInt(temp.innerHTML) || 0 ;
    	num += Value;
    	temp.innerHTML = num;
	}

	// sets span to set button.
	function changeSetHtmlElement(set){
		var setInner = document.getElementById("changeSet"),
		span = document.createElement("span");
		span.className = "caret";
		setInner.innerHTML = set;
		setInner.appendChild(span);
		var dbO = deckBuilderObject,
		previous = dbO.previousSet,
		current = dbO.currentSet;
		if(current == previous)
			return;
		var currLi = document.getElementById("list-"+current);
		currLi.className = "active";
		if(previous != undefined){
			var prevLi = document.getElementById("list-"+previous);
			prevLi.className = ""
		}
	}

	// return sliders existence
	function checkSlider(TheSet){
		if(document.getElementById("cardViewSlider-"+TheSet))
			return true;
		return false;
	}

	// cleans up HTML objects that were current used on filter.
	function CleanFilter(){
		clearSearch();
		clearPokemonTypes();
		clearNavTypes();
		if(deckBuilderObject.currentSliderCode)
			document.getElementById("cardViewSlider-"+deckBuilderObject.currentSliderCode).style.display = "none";
	}

	function clearNavTypes(){
		deckBuilderObject.controllerNavLength = 0;
		for(x in deckBuilderObject.controllerNav){
			document.getElementById("nav-"+x).className = "btn btn-default";
			deckBuilderObject.controllerNav[x] = false
		}
	}

	function clearPokemonTypes(){
		deckBuilderObject.controllerTypeLength = 0;
		for(x in deckBuilderObject.controllerType){
			document.getElementById('energy-pic-'+x).style.opacity = .7
			deckBuilderObject.controllerType[x] = false
		}
	}

	function clearSearch(){
		if(deckBuilderObject.rotation)
			document.getElementById('check-'+deckBuilderObject.rotation).className = "btn btn-default";
		$scope.searchCard = ""
	}

	function deleteFromLocalStorage(CardId,SuperType){
		if(localStorage.getItem("DeckBuilding")){
			var obj = JSON.parse(localStorage.getItem("DeckBuilding"))
			var key = "deckcard-count-"+SuperType[0].toUpperCase()+"-"+CardId
			obj["count"] -= obj[key];
			$scope.DeckCount -= obj[key];
			calculateValue(SuperType, (- parseInt(obj[key]) ) )
			delete obj[key]
			localStorage.setItem("DeckBuilding",JSON.stringify(obj));
		}
	}

	function deleteFromView(CardId,SuperType) {
		var span = document.getElementById("deckcard-count-"+SuperType[0].toUpperCase()+"-"+CardId)
		span.parentElement.parentElement.remove();
	}

	function disableEdit(){
		$scope.enableEdit = false;
		var url = $location.absUrl().replace($location.path(),"/card-");
		var types = ["Pokémon","Trainer","Energy"];
		for(x in types){
			var temp = document.getElementById(types[x]+"-ul");
			for(var i = 1; i < temp.childElementCount + 1; i++){
				var h_obj = temp.childNodes[i];
				var a_h_obj = h_obj.childNodes[0];
				var cardId = h_obj.childNodes[0].childNodes[0].id.substring(17);
				a_h_obj.href = url + cardId;
				a_h_obj.className = "";
			}
		}
	}

	function enableEdit(){
		$scope.enableEdit = true;
		var types = ["Pokémon","Trainer","Energy"];
		for(x in types){
			var temp = document.getElementById(types[x]+"-ul")
			for(var i = 1; i < temp.childElementCount + 1; i++){
				var h_obj = temp.childNodes[i];
				var a_h_obj = h_obj.childNodes[0];
				a_h_obj.href = "javascript: void(0)";
				a_h_obj.className = "cardListA"
			}
		}
	}

	// final step to form sliders... returns error message if no cards.
	function formSlider(cards,setCode){
		if(checkSlider(setCode)){
			removeCurrentSlider();
			deckBuilderObject.currentSliderCode = setCode
			document.getElementById("cardViewSlider-"+setCode).style.display = ""
		}else{
			if(cards.length > 0){
				makeSliderHtml(cards,setCode);
				removeCurrentSlider();
				deckBuilderObject.currentSliderCode = setCode
			}else{
				var str = setCode.split("-");
				var location = str[0];
				var card = "";
				for(var i = 1 ; i < str.length; i++)
					card+=str[i];
				noImagesError(card,location);
			}
		}
	}


	// makes slider for image set
	function makeSliderHtml(cards,setCode){
		$scope.cardModals = cards;
		// creates a new HTML section object.
  		var section = document.createElement("section")
		section.id = "cardViewSlider-"+setCode;
  		section.class = "regular slider";
		// loops through cards and create div and images
  		for(x in cards){
  			var divTemp = document.createElement("div"),
  			imgTemp = document.createElement("img");
  			imgTemp.setAttribute("ng-dblclick", "showModal('modal-"+ cards[x].id +"'  )" );
  			imgTemp.src = cards[x].imageUrl;
  			imgTemp.id = "card-"+cards[x].id;
  			imgTemp.setAttribute("data",cards[x].supertype);
  			imgTemp.setAttribute("cardName",cards[x].name);
  			$compile(imgTemp)($scope)
  			divTemp.appendChild(imgTemp);
  			section.appendChild(divTemp);
  		}
  		// adds to collection of slider div
  		var sliderCollection = document.getElementById("sliderCollection");
  		sliderCollection.appendChild(section);
		// initialize the slider
  		$("#cardViewSlider-"+setCode).slick({ arrows:false, dots: true, infinite: true, slidesToShow: 6, slidesToScroll: 6 });
	}

	// sends error message through templates with given arguments
	function noImagesError(card,location){
		CleanFilter();
		$scope.emptySearch = true;
		$scope.addedFilter = false;
		$scope.errorCard = card;
		$scope.locationError = location;
	}

	//  switch currently display to new set.
	function returnMadeSlider(TheSet){
		var previous = document.getElementById("cardViewSlider-"+deckBuilderObject.previousSet);
		var current = document.getElementById("cardViewSlider-"+TheSet);
		previous.style.display = "none";
		current.style.display = "";
	}

	function returnCurrentFilter(){
		document.getElementById("cardViewSlider-"+deckBuilderObject.currentSet).style.display = "";
	}

	function removePreviousSlider(){
		var tdbobj = deckBuilderObject;
		if(tdbobj.previousSet == undefined)
			return;
		oldSlider = document.getElementById("cardViewSlider-"+tdbobj.previousSet).style.display = "none";
	}

	function removeCurrentSlider(){
		var tdbobj = deckBuilderObject
		document.getElementById("cardViewSlider-"+tdbobj.currentSet).style.display = "none";
	}

	function setCardView(CardId,SuperType,CardName,Value){
    	var a = document.createElement("a");
    	var letterType = SuperType[0].toUpperCase();
    	a.href = "/#/card-"+CardId;
    	a.setAttribute("target","_blank");
    	a.setAttribute("ng-click","removeCard('"+CardId+"','"+SuperType+"')")
    	var li = document.createElement("li");
    	li.className = "cardListLi";

    	var spanId = "deckcard-count-"+letterType+"-"+CardId;
    	a.innerHTML = "<i id='"+spanId+"'>"+Value+" </i> "+ CardName + " - " + CardId;
    	var img = document.createElement("img");
    	var imgCardId = CardId.replace("-","/");
    	img.src= "/images/cards/"+imgCardId+".png";
    	var span = document.createElement("span")
    	span.appendChild(img);
    	a.appendChild(span);
    	li.appendChild(a);
    	document.getElementById(SuperType+"-ul").appendChild(li);
    	calculateValue(SuperType,Value);
		$compile(a)($scope)
	}

	function setToLocalStorage(Object_K,Object_N,Object_V){
		if(localStorage.getItem(Object_K)){
			var lsString = localStorage.getItem(Object_K);
			var jsobject = JSON.parse(lsString);
			jsobject[Object_N] = Object_V;
			jsobject["count"] ++;
			$scope.DeckCount ++;
			lsString = JSON.stringify(jsobject)
			localStorage.setItem("DeckBuilding",lsString);
		}else{
			var jsobject = {};
			jsobject[Object_N] = 1;
			jsobject["count"] = 1;
			localStorage.setItem("DeckBuilding",JSON.stringify(jsobject));
		}
	}

	// triggers modal base don cardId
    $scope.showModal = function(cardId){ $('#'+cardId).modal('show');}

    function updateDeckView(){
    	var deckBuilding_S = localStorage.getItem("DeckBuilding");
    	var deckBuilding_O = JSON.parse(deckBuilding_S);
    	var temp = {}
    	$scope.DeckCount = deckBuilding_O["count"]
    	for(x in deckBuilding_O){
    		if(x != "count")
    			temp[x.substring(17)] = x;
    	}
    	for(x in temp){
    		GetCardSvc.getOne(x).then(function(card){
    			setCardView(card.id,card.supertype,card.name,deckBuilding_O[temp[card.id]]);
    		})
    	}
    }

//========= ./Simple Function ==========//


//================   User Input Function ================//

	// view for card Nav and keeps track with scope
	$scope.addCardType = function(NavType)
	{
		clearSearch();
		clearPokemonTypes();
		var temp = document.getElementById("nav-"+NavType);
		if(temp.className === "btn btn-default"){
			deckBuilderObject.controllerNav[NavType] = true;
			temp.className = "btn btn-default active";
			deckBuilderObject.controllerNavLength ++;
		}else{
			deckBuilderObject.controllerNav[NavType] = false;
			temp.className = "btn btn-default";
			deckBuilderObject.controllerNavLength --;
		}
	}

	// function to filter cards based on input
	$scope.applyFilter = function(){
		$scope.addedFilter = true
		if($scope.searchCard.length > 0){
			GetCardSvc.getCardWithValues($scope.searchCard,deckBuilderObject.rotation).then(function(cards){
				if(cards.length>0)
					return applySearchFilter(cards);
				noImagesError($scope.searchCard,"Database");
			});
		}
		else if (deckBuilderObject.controllerTypeLength > 0){
			applyEnergyFilter();
		}else if (deckBuilderObject.controllerNavLength > 0){
			applyNavFilter();
		}else{
			$scope.addedFilter = false;
		}

		if($scope.addedFilter)
			$scope.emptySearch = false;

	}

	$scope.changeSet = function(TheSet){
		GetCardSvc.grabSetOfCardsBySet(TheSet)
        .then(function(product){
        	deckBuilderObject.currentCards = product;
        	var setCode = product[0].setCode;
        	deckBuilderObject.previousSet = deckBuilderObject.currentSet;
			deckBuilderObject.currentSet = setCode;
        	if(checkSlider(setCode)){
        		returnMadeSlider(setCode);
        	}else{
        		makeSliderHtml(product,setCode);
        		removePreviousSlider();
        	}
        	changeSetHtmlElement(TheSet);
        });
	};

	// determines what rotation is checked.
	$scope.checkBoxType = function(Rotation){
		var cardRotatio = ['Standard','Expanded','Unlimited']
		cardRotatio.splice(cardRotatio.indexOf(Rotation),1);
		var temp = document.getElementById("check-"+Rotation);
		if(temp.className === "btn btn-default active"){
			temp.className = "btn btn-default";
			deckBuilderObject.rotation = null;
		} else {
			temp.className = "btn btn-default active"
			deckBuilderObject.rotation = Rotation;
			for(x in cardRotatio)
				document.getElementById("check-"+cardRotatio[x]).className = "btn btn-default";
		}
	}

	$scope.clearThem = function(){
		if (deckBuilderObject.controllerTypeLength > deckBuilderObject.controllerNavLength)
			clearPokemonTypes();
		else if (deckBuilderObject.controllerNavLength > deckBuilderObject.controllerTypeLength)
			clearNavTypes();
	}


	$scope.deckComments = function(TheCase){
		var onSpan = document.getElementById('deck_builder_submit_comments_On');
		var offSpan = document.getElementById('deck_builder_submit_comments_Off');
		if( TheCase ==="On" ){
			onSpan.style.fontWeight = 'Bold';
			offSpan.style.fontWeight = '';
			deckBuilderObject.deckComments = true;
		}else if ( TheCase === "Off" ){
			onSpan.style.fontWeight = '';
			offSpan.style.fontWeight = 'Bold';
			deckBuilderObject.deckComments = false;
		}
	}

	$scope.deckIcon = function(IconId){
		for(x in deckBuilderObject.deckIcon){
			if( x === IconId ){
				deckBuilderObject.deckIcon[x] = true;
				deckBuilderObject.deckIconSelected = x.replace('deck_builder_submit_icon_','');
				document.getElementById(x).style.opacity = 1;
			} else if( x != IconId ) {
				deckBuilderObject.deckIcon[x] = false;
				document.getElementById(x).style.opacity = '';
			}
		}
	}

	$scope.deckVisibility = function(TheCase){
		var onSpan = document.getElementById('deck_builder_submit_visibility_On');
		var offSpan = document.getElementById('deck_builder_submit_visibility_Off');
		if( TheCase === 'On' ){
			onSpan.style.fontWeight = 'Bold';
			offSpan.style.fontWeight = '';
			deckBuilderObject.deckVisibility = true;
		}else if ( TheCase === 'Off' ){
			onSpan.style.fontWeight = '';
			offSpan.style.fontWeight = 'Bold';
			deckBuilderObject.deckVisibility = false;
		}
	}

	$scope.deckRotation = function(Rotation){
		//deckBuilderObject.deckRotation
		var span;
		for(x in deckBuilderObject.deckRotation){
			if(x === Rotation){
				span = document.getElementById('deck_builder_submit_'+x);
				span.style.fontWeight = 'bold';
				deckBuilderObject.deckRotation[x] = true;
				deckBuilderObject.deckRotationSelected = x;
			} else {
				deckBuilderObject.deckRotation[x] = false;
				span = document.getElementById('deck_builder_submit_'+x);
				span.style.fontWeight = '';
			}
		}
	}

	$scope.EditView = function(){
		var editButton = document.getElementById("EditButton")
		if(editButton.style.opacity == 1){
			enableEdit();
			editButton.style.opacity = 0.5;
		}
		else{
			disableEdit();
			editButton.style.opacity = 1;
		}

	}

	// view controller for energy picture and is tracked by deckBuilderObject.controllerType
	$scope.energyFilter = function(CardType){
		clearNavTypes();
		clearSearch();
		var picObject = document.getElementById("energy-pic-"+CardType);
		if(deckBuilderObject.controllerType[CardType] === false){
			picObject.style.opacity = 1;
			deckBuilderObject.controllerType[CardType] = true;
			deckBuilderObject.controllerTypeLength ++;
		}else{
			picObject.style.opacity = .7;
			deckBuilderObject.controllerType[CardType] = false;
			deckBuilderObject.controllerTypeLength --;
		}
	}

	$scope.handleCard = function(clickEvent){
		if(clickEvent.target.id)
			addCard(clickEvent.target.id,clickEvent.target.getAttribute("data"),clickEvent.target.getAttribute("cardName"));
    }

	// removes current filter
	$scope.removeFilter = function(){
		CleanFilter()
		returnCurrentFilter()
		$scope.addedFilter = false
		document.getElementById("changeSet").style.display = ""
	}

	$scope.removeCard  = function(CardId,SuperType){
		var id = CardId.replace("card-","");
		if($scope.enableEdit){
			deleteFromLocalStorage(id,SuperType);
			deleteFromView(id,SuperType);
		}
	}


	$scope.ShowSubmitDeck = function(){
		$('#SubmitDeck').modal({
			backdrop: 'static',
 			keyboard: false
		})
	}

	$scope.SubmitDeck = function(){
		var DeltaObject = quill.getContents();
		var tempDeckObject = JSON.parse(localStorage.getItem("DeckBuilding"));
		var deckCardsObject = {}
		var DeckSettings = {
			visibility:deckBuilderObject.deckVisibility,
			comments: deckBuilderObject.deckComments,
			icon: deckBuilderObject.deckIconSelected,
			rotation: deckBuilderObject.deckRotationSelected
		};

		if($scope.DeckName.length <= 0){
			var error = document.getElementById("loginError");
			error.innerHTML = "Please add a name to your deck.";
			return;
		}
		for(x in tempDeckObject ){
			if(x != 'count'){
				var str = x.replace("deckcard-count-P-", "");
				deckCardsObject[str] = tempDeckObject[x];
			}else if(x == 'count'){
				deckCardsObject[x] = tempDeckObject[x];
			}
		}
		UserSvc.returnSessionUserName()
			.then(function(username){
				"use strict";
				if (username) {
					var userName = username;
					DeckBuilderSvc.addDeck($scope.DeckName, deckCardsObject, userName, DeltaObject, DeckSettings)
					.then(function (response) {
						localStorage.setItem("DeckBuilding",'{"count":0}');
						deckBuilderObject.url =  "/deckConformation-" + userName + "-deck-" + $scope.DeckName;
						deckBuilderObject.submit = true;
						$("#SubmitDeck").modal("toggle");
					});
				} else {
					var error = document.getElementById("loginError");
					error.innerHTML = "Please Login In";
				}
			});
	}
//================ ./User Input Function ================//

//================ Event Listeners =============//
$('#SubmitDeck').on('hidden.bs.modal', function() {
    if(deckBuilderObject.url != null && deckBuilderObject.submit == true ){
			window.location = $location.absUrl().replace($location.path(),deckBuilderObject.url);
		}
})
//==============./ Event Listeners =============//

//==========   Variables  ===========//
	var deckBuilderObject = {};
	deckBuilderObject.currentCards = [];
	deckBuilderObject.currentSliderCode = null;
	deckBuilderObject.previousSet = undefined;
	deckBuilderObject.currentSet = null;
	deckBuilderObject.controllerTypeLength = 0;
	deckBuilderObject.controllerType = {};
	deckBuilderObject.controllerNavLength = 0;
	deckBuilderObject.controllerNav = { Supporter:false,Item:false,Stadium:false,Energy:false };
	deckBuilderObject.deckComments = true;
	deckBuilderObject.deckIcon = {};
	deckBuilderObject.deckIconSelected = null;
	deckBuilderObject.deckRotation = { Standard: false, Expanded:false, Unlimited:false };
	deckBuilderObject.deckRotationSelected = null;
	deckBuilderObject.deckVisibility = true;
	deckBuilderObject.rotation = null;
	deckBuilderObject.controllerNav["Pokémon Tool"] = false;
	deckBuilderObject.url = null;
	deckBuilderObject.submit = false;
	$scope.searchCard = "";
	$scope.cardModals = [];
	$scope.DeckName = "";
	// Localstorage

	// Options for quill.
    var options = {
		modules: {
			toolbar: [
  				[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
				['bold', 'italic', 'underline','strike'],
				[{ 'color': [] }, { 'background': [] }],
				[{ 'font': [] }],
  				[{ 'align': [] }],
				['code-block']
			]
		},
		placeholder: 'Write details about your deck here!',
		theme: 'snow'
	};

	// quill text editor.
    var quill = new Quill('#editor',options);

//========== ./Variables  ===========//
}); //end of .controller
app.directive('sglclick', ['$parse', function($parse) {
    return {
    	restrict: 'A',
        link: function(scope, element, attr) {
        	var fn = $parse(attr['sglclick']);
        	var delay = 300
        	var clicks = 0
        	var timer = null;
        	// for right click
        	element.on('contextmenu',function(event)
        	{
        		scope.$apply(function(){fn(scope,{$event:event})})
        	})
        	// for left click and double click.
        	element.on('click', function (event) {
        		clicks++;  //count clicks
        		if(clicks === 1) {
            		timer = setTimeout(function() {
            			scope.$apply(function () {
                			fn(scope, { $event: event });
                		});
                		clicks = 0;             //after action performed, reset counter
              		}, delay);
            	}
            	else if ( clicks === 3)
            	{
            		scope.$apply(function(){fn(scope,{$event:event})});
            	}
				else {
					clearTimeout(timer);    //prevent single-click action
					clicks = 0;             //after action performed, reset counter
				}
			});
       	}
    };
}])

// HARD:
//TODO: Add some sorting for the deck viewer.

// EASY:
//TODO: Put deck description, deck name, visibility, allow comments, gif image ?
//TODO: After save redirect the user to the deckpage.
