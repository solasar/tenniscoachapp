angular.module('Controllers', ['Services', 'Constants'])

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

.controller('LoginCtrl', function($scope, $state, $ionicPopup, AuthService) {
  $scope.data = {};
  AuthService.clearCredential();
  $scope.login =  function(data) {
    $scope.dataLoading = true;
    var hashPassword = CryptoJS.SHA256(data.password);
    AuthService.login(data.userid, hashPassword).then(function (authenticate) {
      console.log('AuthService success!');
      AuthService.setCredential(data.userid, data.password);
      $state.go('nav.dashboard', {}, {reload: true});
    }, function (err) {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials.'
      });
    });
  };
  $scope.toCreateAccount = function() {
    AuthService.clearCredential();
    $state.go('create_account', {}, {reload: true});
  };
})

.controller('CreateAcctCtrl', function($scope, $state, $ionicPopup, AuthService) {
  $scope.data = {};
  $scope.newAccount = function (data) {
    AuthService.newAccount(data.userid, data.firstname, data.lastname, data.email, data.phonenumber, data.password, data.usertype).then(function (authenticate) {
      var userInfo = {
        userid: data.userid,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phonenumber: data.phonenumber,
        password: data.password,
        usertype: data.usertype
      }
      AuthService.setUserInfo(userInfo);
      $state.go('nav.dashboard');
    }, function (err) {
      var alertPopup = $ionicPopup.alert({
        title: 'Creating account failed!',
        template: 'Please make sure to put correct information.'
      })
    })
  };
})
.controller('DashCtrl', function($state, $scope, $http, AuthService, STORAGE_KEYS) {
  $scope.data = {};

  if (window.localStorage.getItem(STORAGE_KEYS.userInfo)) {
    console.log('localstorage not empty');
    var temp = window.localStorage.getItem(STORAGE_KEYS.userInfo);
    console.log(temp.firstname);
    $scope.data = JSON.parse(temp);
  } else {console.log('localstorage empty');
    $http.get('/api/get_user_info').then(function (response) {
      $scope.data = response.data;
      AuthService.setUserInfo(response.data);
      console.log('Test: ' + window.localStorage.getItem(STORAGE_KEYS.userType));
    }, function (err) {
      console.log(err);
    });
  }
})

.controller('AccessCtrl', function($state, $scope, $stateParam) {
  console.log('Keun in access control');
  $scope.parameter = $stateParam.level;

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
