// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Tennis', ['ionic', 'Controllers'])

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

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('nav', {
    url: "/",
    abstract: true,
    templateUrl: "templates/sidemenu.html"
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
        templateUrl: 'templates/assessment.html',
        controller: 'AssessCtrl'
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
});
