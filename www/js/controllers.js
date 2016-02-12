angular.module('starter')

.controller('AppCtrl', function() {})
.controller('WelcomeCtrl', function($scope, $state) {
  $scope.toLogin = function () {
    $state.go('nav.login');
  };
})
.controller('LoginCtrl', function($scope, $state, $ionicPopup, Accounts) {
  $scope.data = {};
  $scope.login = function () {
    if (Accounts.all().username == $scope.data.username && Accounts.all().password == $scope.data.password) {
      $state.go('nav.account');
    } else {
      var alertPopup = $ionicPopup.alert({
        title: 'Login Failed!',
        template: 'Your login information is invalid.'
      });
    }
  };
})
.controller('AccountCtrl', function($scope, Accounts) {
  $scope.user = Accounts.all();
});
