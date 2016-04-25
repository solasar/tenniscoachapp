angular.module('account')

.controller('LoginCtrl', function($scope, $state, $ionicPopup, AuthService) {
  $scope.data = {};
  AuthService.clearCredential();
  $scope.login =  function(data) {
    $scope.dataLoading = true;
    AuthService.login(data.userid, data.password).then(function (authenticate) {
      console.log('AuthService success!');
      console.log(authenticate);
      AuthService.setCredential(data.userid, data.password);
      AuthService.getUserInfo().then(function(response) {
        console.log('Respnose: ', response.data[0]);
        AuthService.setUserInfo(response.data[0]);
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

.controller('CreateAcctCtrl', function($scope, $state, $ionicPopup, AuthService, USER_TYPES, USER_SKILLS) {
  $scope.data = {};
  $scope.level = USER_TYPES;
  $scope.newAccount = function (data) {
    var popup_msg = "";
    if (!AuthService.validateId(data.userid)) {
      popup_msg = "Please type in valid user id";
    } else if (!AuthService.validateName(data.firstname)) {
      popup_msg = "Please type in valid first name";
    } else if (!AuthService.validateName(data.lastname)) {
      popup_msg = "Please type in valid last name";
    } else if (!AuthService.validateEmail(data.email)) {
      popup_msg = "Please type in valid email";
    } else if (!AuthService.validatePhone(data.phonenumber)) {
      popup_msg = "Please type in valid phone number";
    } else if (data.usertype == "") {
      popup_msg = "Please pick a user type";
    }
    if (popup_msg == "") {
      console.log('This is password, not hashed: ', data.password);
      console.log('This is hashed password, before adding into var: '+ CryptoJS.SHA256(data.password).toString(CryptoJS.enc.Hex));
      console.log('This is hashed password, before adding into var: '+ CryptoJS.SHA256(data.password));
      var hashPassword = CryptoJS.SHA256(data.password);
      console.log('This is hashed password: ', hashPassword);
      AuthService.newAccount(data.userid, data.firstname, data.lastname, data.email, data.phonenumber, hashPassword.toString(CryptoJS.enc.Hex), data.usertype).then(function (authenticate) {
        console.log('New user registered', authenticate);
        var newUser = {
          Username : data.userid,
          FirstName: data.firstname,
          LastName: data.lastname,
          Email: data.email,
          PhoneNumber : data.phonenumber,
          Password: hashPassword,
          Type: data.usertype,
          UserSkill: USER_SKILLS.beginner
        }
        AuthService.setUserInfo(newUser);
        $state.go('nav.dashboard');
      }, function (err) {
        console.log('New user failed to get registered', err);
        var alertPopup = $ionicPopup.alert({
          title: 'Creating account failed!',
          template: 'Server failed to register new account'
        });
      });
    } else {
      var alertPopup = $ionicPopup.alert({
        title: 'Invalid user info',
        template: popup_msg
      });
    }

  };
})

.controller('EditAcctCtrl', function($http, $state, $scope) {

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
