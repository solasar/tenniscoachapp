// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('assessment', []);
angular.module('account', ['utf8-base64']);
angular.module('starter', ['ionic', 'account', 'ngMockE2E'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.run(function($httpBackend, Accounts) {
  $httpBackend.whenGET('/api/get_user_info').respond(Accounts.all());
  $httpBackend.whenPOST('/api/authenticate', {userid: Accounts.all().userid, password: CryptoJS.SHA256(Accounts.all().password)}).respond(200, {message: 'Fake login success'});
  $httpBackend.whenPOST('/api/create_account').respond(200, {message: 'Fake new account success'});
  $httpBackend.whenGET(/templates\/\w+.*/).passThrough();
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl',
    cache: false
  })

  .state('create_account', {
    url: '/create_account',
    templateUrl: 'templates/create_account.html',
    controller: 'CreateAcctCtrl'
  })

  .state('nav', {
    url: '/',
    abstract: true,
    templateUrl: 'templates/sidemenu.html'
  })

  .state('nav.dashboard', {
    url: 'nav/dashboard',
    views: {
      'sideContent': {
        templateUrl: 'templates/dashboard.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('nav.assessment', {
    url: 'nav/assessment',
    views: {
      'sideContent': {
        templateUrl: 'templates/skill_level.html'
      }
    }
  })

  .state('nav.assessment.test', {
    url: '/test',
    views: {
      '@': {
        templateUrl: 'templates/assessment.html',
        controller: function () {
          console.log('=D');
        }
      }
    }
  })

  .state('nav.practice', {
    url: 'nav/practice',
    views: {
      'sideContent': {
        templateUrl: 'templates/practice.html',
        controller: 'PracticeCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');
  $ionicConfigProvider.navBar.alignTitle('center')
})

.controller('AppCtrl', function($scope, $state, $ionicPopup, AUTH_EVENTS, AuthService) {
  $scope.$back = function() {
    window.history.back();
  };

  $scope.$signoff = function() {
    AuthService.clearCredential();
    $state.go('login', {}, {reload: true});
  }

  $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
    var alertPopup = $ionicPopup.alert({
      title: 'Unauthorized!',
      template: 'You are not allowed to accesss this page.'
    });
  });
});
