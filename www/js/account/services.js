angular.module('account')
.service('AuthService', function($http , base64, $q, $ionicPopup, STORAGE_KEYS, ServerURL, USER_TYPES, Accounts) {
  var isAuthenticated = false;

  var login = function(userid, password) {
    console.log("password ", password.toString(CryptoJS.enc.Hex));
    return $http.post(ServerURL + 'login', {name: userid, pwhash: CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex)});
    //return $http.post('/api/authenticate', {userid: userid, password: password});
  };

  var newAccount = function(id, firstname, lastname, email, phone, password, type) {
    var temp = {
      id: id,
      firstname: firstname
    }
    console.log('check this temp', temp);
    console.log('accounttype: ' + type);
    return $http.post(ServerURL + 'registration',
      {username: id, firstname: firstname, lastname: lastname, email: email, phone: phone, password: CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex), usertype: type});
  };

  var getUserInfo = function() {
    if (isAuthenticated) {
      console.log('Authenticated');
      var name = window.localStorage.getItem(STORAGE_KEYS.userId);
      console.log('username: ', name);
      console.log('username: '+ name);
      return $http.post(ServerURL + 'profile', {username: name});
      //return $http.get('/api/get_user_info');
    }
  }

  //structure of data parameter was decided by the backend server
  var setUserInfo = function(data) {
    console.log("profile call answer", data);
    window.localStorage.setItem(STORAGE_KEYS.userId, data.Username);
    window.localStorage.setItem(STORAGE_KEYS.password, data.Password);
    window.localStorage.setItem(STORAGE_KEYS.firstName, data.FirstName);
    window.localStorage.setItem(STORAGE_KEYS.lastName, data.LastName);
    window.localStorage.setItem(STORAGE_KEYS.email, data.Email);
    window.localStorage.setItem(STORAGE_KEYS.phoneNumber, data.PhoneNumber);
    window.localStorage.setItem(STORAGE_KEYS.userType, data.Type);
    window.localStorage.setItem(STORAGE_KEYS.userSkill, data.UserSkill);
/*
    window.localStorage.setItem(STORAGE_KEYS.userId, data.userid);
    window.localStorage.setItem(STORAGE_KEYS.password, data.password);
    window.localStorage.setItem(STORAGE_KEYS.firstName, data.firstname);
    window.localStorage.setItem(STORAGE_KEYS.lastName, data.lastname);
    window.localStorage.setItem(STORAGE_KEYS.email, data.email);
    window.localStorage.setItem(STORAGE_KEYS.phoneNumber, data.phonenumber);
    window.localStorage.setItem(STORAGE_KEYS.userType, data.usertype);
    window.localStorage.setItem(STORAGE_KEYS.userSkill, data.userskill);
*/
  };

  var setCredential = function(userid, password) {
    var hashPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    var authData = base64.encode(userid + ':' + hashPassword);
    console.log('Basic64: ' + authData);
    $http.defaults.headers.common['Authorization'] = 'Basic ' + authData;
    window.localStorage.setItem(STORAGE_KEYS.userId, userid);
    window.localStorage.setItem(STORAGE_KEYS.password, hashPassword);
    isAuthenticated = true;
  };

  function clearCredential() {
    window.localStorage.clear();
    $http.defaults.headers.common.Authorization = 'Basic ';
    isAuthenticated = false;
  };

  var editAccount = function (data) {

  }

  var changePassword = function (data) {
    if (window.localStorage.getItem(STORAGE_KEYS.password) == CryptoJS.SHA256(data.oldpassword).toString(CryptoJS.enc.Hex)) {

    } else {

    }
  }

  var validateId = function (id) {
    var regex = /^[A-Za-z0-9-]/;
    return (typeof(id) != 'undefined') && regex.test(id);
  };

  var validateName  = function (name) {
    var regex = /^[A-Za-z-]/;
    return (typeof(name) != 'undefined') && regex.test(name);
  };

  var validateEmail = function (email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (typeof(email) != 'undefined') && regex.test(email);
  };

  var validatePhone = function (phone) {
    var regex = /^\(?([2-9][0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return (typeof(phone) != 'undefined') && regex.test(phone);
  };

  return {
    login: login,
    setCredential: setCredential,
    clearCredential: clearCredential,
    getUserInfo: getUserInfo,
    setUserInfo: setUserInfo,
    newAccount: newAccount,
    validateId: validateId,
    validateName: validateName,
    validateEmail: validateEmail,
    validatePhone: validatePhone,
    isAuthenticated: function () {return isAuthenticated;},
    userid: function () {return window.localStorage.getItem(STORAGE_KEYS.userId) || '';},
    password: function () {return window.localStorage.getItem(STORAGE_KEYS.password) || '';}
  };
})

.factory('Accounts', function () {
  var accounts = {
    userid: 'user',
    password: 'password',
    firstname: 'Roger',
    lastname: 'Federer',
    email: 'roger.federer@gmail.com',
    phonenumber: '4045056767',
    usertype: 'Player',
    userskill: 'Beginner'
  };
  return {
    all: function() {
      return accounts;
    }
  };
});
