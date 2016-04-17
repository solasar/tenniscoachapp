// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('tennis', []);
angular.module('assessment', ['tennis', 'account']);
angular.module('practice', ['tennis', 'account']);
angular.module('account', ['utf8-base64']);
angular.module('starter', ['ionic', 'account', 'assessment','practice','tennis', 'ngMockE2E'])

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
  $httpBackend.whenPOST('http://54.164.54.3/login').passThrough();
  $httpBackend.whenPOST('http://54.164.54.3/registration').passThrough();
  $httpBackend.whenGET('http://jsonplaceholder.typicode.com/posts').passThrough();
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
      cache: false,
      views: {
        'sideContent': {
          templateUrl: 'templates/dashboard.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('nav.assessment', {
      url: 'nav/assessment',
      cache: false,
      views: {
        'sideContent': {
          templateUrl: 'templates/assessment.html',
          controller: 'AssessCtrl'
        },
        'court@nav.assessment': {
          templateUrl: 'templates/court.html',
          controller: 'CourtCtrl'
        }
      }
    })

    .state('nav.assessment_result', {
      url: 'nav/assessment_result',
      cache: false,
      views: {
        'sideContent': {
          templateUrl: 'templates/assessment_result.html',
          controller: 'AssessResultCtrl'
        }
      }
    })

    .state('nav.practice_start', {
      url: 'nav/practice_start',
      cache: false,
      views: {
        'sideContent': {
          templateUrl: 'templates/practice_start.html',
          controller: 'PracticeStartCtrl'
        }
      }
    })

    .state('nav.practice_result', {
      url: 'nav/practice_result',
      cache: false,
      views: {
        'sideContent': {
          templateUrl: 'templates/practice_result.html',
          controller: 'PracticeResultCtrl'
        }
      }
    })

    .state('nav.practice', {
      url: 'nav/practice',
      cache: false,
      views: {
        'sideContent': {
          templateUrl: 'templates/practice.html',
          controller: 'PracticeCtrl'
        },
        'court@nav.practice': {
          templateUrl: 'templates/court.html',
          controller: 'CourtCtrl'
        }
      }
    })

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
