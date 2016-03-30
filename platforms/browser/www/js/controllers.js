angular.module('Controllers', ['Services', 'Constants'])

.controller('AppCtrl', function($scope, $ionicPopup, AUTH_EVENTS, AuthService) {
  $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
    var alertPopup = $ionicPopup.alert({
      title: 'Unauthorized!',
      template: 'You are not allowed to accesss this page.'
    });
  });
})

.controller('LoginCtrl', function($scope, $state, $ionicPopup, AuthService) {
  $scope.data = {};
  AuthService.clearCredential();
  $scope.login =  function(data) {
    $scope.dataLoading = true;
    AuthService.login(data.username, data.password).then(function (authenticate) {
      console.log('AuthService success!');
      $state.go('nav.dashboard', {}, {reload: true});
    }, function (err) {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials.'
      });
    });
  };
})

.controller('DashCtrl', function($scope, AuthService) {
  $scope.username = AuthService.username();
})

.controller('AccessCtrl', function() {

})

.controller('PracticeCtrl', function() {

})

.controller('WelcomeCtrl', function($scope, $state) {
  $scope.toLogin = function () {
    $state.go('nav.login');
  };
})

.controller('AccountCtrl', function($scope, Accounts) {
  $scope.user = Accounts.all();
});
