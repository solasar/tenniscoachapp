// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('tennis', []);
angular.module('exercise', ['tennis', 'account']);
angular.module('statistic', ['tennis', 'account']);
angular.module('assessment', ['tennis', 'account']);
angular.module('match', ['tennis', 'account']);
angular.module('account', ['utf8-base64']);
//Make sure to inject all new modules into starter module
angular.module('starter', ['ionic', 'account', 'assessment','match', 'exercise', 'statistic', 'tennis', 'ngMockE2E'])

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

.run(function($httpBackend, Accounts, ServerURL) {
  $httpBackend.whenGET('/api/get_user_info').respond(Accounts.all());
  $httpBackend.whenPOST('/api/authenticate', {userid: Accounts.all().userid, password: CryptoJS.SHA256(Accounts.all().password)}).respond(200, {message: 'Fake login success'});
  $httpBackend.whenPOST('/api/create_account').respond(200, {message: 'Fake new account success'});
  $httpBackend.whenPOST(ServerURL + 'login').passThrough();
  $httpBackend.whenPOST(ServerURL + 'registration').passThrough();
  $httpBackend.whenPOST(ServerURL + 'profile').passThrough();
  $httpBackend.whenPOST(ServerURL + 'getHeat').passThrough();
  $httpBackend.whenPOST(ServerURL + 'getZone').passThrough();
  $httpBackend.whenPOST(ServerURL + 'rank').passThrough();
  $httpBackend.whenPOST(ServerURL + 'dinput').passThrough();
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
      url: 'nav/assessment_result/:records',
      cache: false,
      views: {
        'sideContent': {
          templateUrl: 'templates/assessment_result.html',
          controller: 'AssessResultCtrl'
        }
      }
    })

    .state('nav.match_result', {
      url: 'nav/match_result/:records',
      cache: false,
      views: {
        'sideContent': {
          templateUrl: 'templates/match_result.html',
          controller: 'MatchResultCtrl'
        }
      }
    })

    .state('nav.match', {
      url: 'nav/match',
      cache: false,
      views: {
        'sideContent': {
          templateUrl: 'templates/match.html',
          controller: 'MatchCtrl'
        },
        'court@nav.match': {
          templateUrl: 'templates/court.html',
          controller: 'CourtCtrl'
        }
      }
    })

    .state('nav.statistic', {
      url: 'nav/statistic',
      cache: false,
      views: {
        'sideContent': {
          templateUrl: 'templates/statistic.html',
          controller: 'StatsScoreCtrl'
        },
        'court@nav.statistic': {
          templateUrl: 'templates/court.html',
          controller: 'CourtCtrl'
        }
      }
    })

    .state('nav.exercise', {
      url: 'nav/exercise',
      cache: false,
      views: {
        'sideContent': {
          templateUrl: 'templates/exercise.html',
          controller: 'ExerciseCtrl'
        },
        'court@nav.exercise': {
          templateUrl: 'templates/court.html',
          controller: 'CourtCtrl'
        }
      }
    })

    .state('nav.exercise_result', {
      url: 'nav/exercise_result/:records',
      cache: false,
      views: {
        'sideContent': {
          templateUrl: 'templates/exercise_result.html',
          controller: 'ExerciseResultCtrl'
        }
      }
    })

  $urlRouterProvider.otherwise('/login');
  $ionicConfigProvider.navBar.alignTitle('center')
})

.controller('DashCtrl', function($state, $scope, $http, AuthService, STORAGE_KEYS, USER_TYPES) {
  $scope.data = $scope.data = {
    firstname: window.localStorage.getItem(STORAGE_KEYS.firstName),
    lastname: window.localStorage.getItem(STORAGE_KEYS.lastName),
    userid: window.localStorage.getItem(STORAGE_KEYS.userId),
    email: window.localStorage.getItem(STORAGE_KEYS.email),
    phonenumber: window.localStorage.getItem(STORAGE_KEYS.phoneNumber),
    usertype: window.localStorage.getItem(STORAGE_KEYS.userType),
    userskill: window.localStorage.getItem(STORAGE_KEYS.userSkill)
  };

  //console.log('KEUN@@', Object.keys(USER_TYPES).filter(function(key) {return USER_TYPES[key] === 'P '})[0]);

  $scope.toAssessment = function () {
    $state.go('nav.assessment', {}, {reload: true});
  }

  $scope.toMatch = function () {
    $state.go('nav.match', {}, {reload: true});
  }

  $scope.toStatistic = function () {
    $state.go('nav.statistic', {}, {reload: true});
  }

  $scope.toExercise = function () {
    $state.go('nav.exercise', {}, {reload: true});
  }
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
})

//Global variable for server url. Must be used in all api calls.
.factory('ServerURL', function () {
  return 'http://54.164.54.3/';
})
