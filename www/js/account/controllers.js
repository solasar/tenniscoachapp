angular.module('account')

.controller('LoginCtrl', function($scope, $state, $ionicPopup, AuthService, STORAGE_KEYS) {
  $scope.data = {};
  AuthService.clearCredential();
  $scope.login =  function(data) {
    $scope.dataLoading = true;
    var hashPassword = CryptoJS.SHA256(data.password);
    AuthService.login(data.userid, hashPassword).then(function (authenticate) {
      console.log('AuthService success!');
      console.log(authenticate);
      AuthService.setCredential(data.userid, hashPassword);
      AuthService.getUserInfo().then(function(response) {
        console.log('Respnose: ', response.data);
        AuthService.setUserInfo(response.data);
        $state.go('nav.dashboard', {}, {reload: true});
      }, function(err) {
        console.log(err);
      });


    }, function (err) {
      console.log('Login Failed', err);
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

.controller('CreateAcctCtrl', function($scope, $state, $ionicPopup, AuthService, USER_SKILLS, STORAGE_KEYS) {
  $scope.data = {};
  $scope.level = USER_SKILLS;
  $scope.newAccount = function (data) {
    console.log('This is password, not hashed: ', data.password);
    console.log('This is hashed password, before adding into var: ', CryptoJS.SHA256(data.password).toString(CryptoJS.enc.Hex));
    console.log('This is hashed password, before adding into var: '+ CryptoJS.SHA256(data.password));
    var hashPassword = CryptoJS.SHA256(data.password);
    console.log('This is hashed password: ', hashPassword);
    AuthService.newAccount(data.userid, data.firstname, data.lastname, data.email, data.phonenumber, hashPassword.toString(CryptoJS.enc.Hex), data.usertype).then(function (authenticate) {
      console.log('New user registered', authenticate);
      var newUser = {
        userid : data.userid,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phonenumber: data.phonenumber,
        password: hashPassword,
        usertype: data.usertype,
        userskill: USER_SKILLS.beginner
      }
      AuthService.setUserInfo(newUser);
      $state.go('nav.dashboard');
    }, function (err) {
      console.log('New user failed to get registered', err);
      var alertPopup = $ionicPopup.alert({
        title: 'Creating account failed!',
        template: 'Please make sure to put correct information.'
      })
    })
  };
})
.controller('DashCtrl', function($state, $scope, $http, AuthService, STORAGE_KEYS) {
  $scope.data = $scope.data = {
    firstname: window.localStorage.getItem(STORAGE_KEYS.firstName),
    lastname: window.localStorage.getItem(STORAGE_KEYS.lastName),
    userid: window.localStorage.getItem(STORAGE_KEYS.userId),
    email: window.localStorage.getItem(STORAGE_KEYS.email),
    phonenumber: window.localStorage.getItem(STORAGE_KEYS.phoneNumber),
    usertype: window.localStorage.getItem(STORAGE_KEYS.userType),
    userskill: window.localStorage.getItem(STORAGE_KEYS.userSkill)
  };
/*
  console.log('Stored password:', window.localStorage.getItem(STORAGE_KEYS.password));

  if (window.localStorage.getItem(STORAGE_KEYS.userInfo)) {
    console.log('localstorage not empty');
    $scope.data = {
      firstname: JSON.parse(window.localStorage.getItem(STORAGE_KEYS.firstName)),
      lastname: JSON.parse(window.localStorage.getItem(STORAGE_KEYS.lastName)),
      userid: JSON.parse(window.localStorage.getItem(STORAGE_KEYS.userId)),
      email: JSON.parse(window.localStorage.getItem(STORAGE_KEYS.email)),
      phonenumber: JSON.parse(window.localStorage.getItem(STORAGE_KEYS.phoneNumber)),
      usertype: JSON.parse(window.localStorage.getItem(STORAGE_KEYS.userType)),
      userskill: JSON.parse(window.localStorage.getItem(STORAGE_KEYS.userSkill))
    }
  } else {console.log('localstorage empty');
    $http.get('/api/get_user_info').then(function (response) {
      $scope.data = response.data;

      AuthService.setUserInfo(response.data);
      console.log('Test: ' + window.localStorage.getItem(STORAGE_KEYS.userType));
    }, function (err) {
      console.log(err);
    });
  }
  */
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
