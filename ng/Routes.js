angular.module('app')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{templateUrl:'/templates/Home.html'})
            .when('/cards',{controller:'CardsCtrl',templateUrl:'/templates/Cards.html'})
            .when('/card_manager',{controller: 'CardManagerCtrl',templateUrl:'/templates/CardManager.html'})
            .when('/card:cardId',{controller:'CardCtrl',templateUrl:'/templates/Card.html'})
            .when('/register',{controller:'RegisterCtrl',templateUrl:'/templates/Register.html'})
            .when('/register-userImg',{controller:'RegisterUserImage',templateUrl:'/templates/RegisterUserImage.html'})
            .when('/register-userBanner',{controller:'RegisterUserBanner',templateUrl:'/templates/RegisterUserBanner.html'})
            .when('/login',{controller:'LoginCtrl',templateUrl:'/templates/Login.html'})
            .when('/user:username-deck:deckname',{controller:'DeckCtrl',templateUrl:'/templates/Deck.html'})
            .when('/deck_builder',{controller:'DeckBuilderCtrl',templateUrl:'templates/DeckBuilder.html'})
            .when('/deckConformation:username-deck:deckname',{controller:'DeckConformationCtrl',templateUrl:'/templates/DeckConformation.html'})
            .when('/deck_manager',{controller:'DeckManagerCtrl',templateUrl:'/templates/DeckManager.html'})
            .when('/user-:username',{controller:'UserContentCtrl',templateUrl:'templates/UserContent.html'})
            .when('/brokenLink',{templateUrl:'templates/BrokenLinkError.html'})
            .otherwise({redirectTo: '/'});
  })
  .factory('authHttpResponseInterceptor',['$q','$location',function($q,$location){
    return {
    	response: function(response){
    		return response || $q.when(response);
    	},
    	responseError: function(rejection) {
    		if (rejection.status === 401) {
    			$location.path('/login')//.search('returnTo', $location.path());
    		}else if( rejection.status === 404){
          $location.path('/brokenLink')//.search('returnTo',$location.path());
        }
    		return $q.reject(rejection);
    	}
    }
  }])
  .config(['$httpProvider',function($httpProvider) {
    //Http Intercpetor to check auth failures for xhr requests
    $httpProvider.interceptors.push('authHttpResponseInterceptor');
  }]);
