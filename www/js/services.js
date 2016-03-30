angular.module('Services', ['utf8-base64', 'Constants'])
.service('AuthService', function($http , base64, $q, $ionicPopup, STORAGE_KEYS, USER_TYPE, Accounts) {
  var isAuthenticated = false;
  var rootUrl = 'http://jsonplaceholder.typicode.com';


  var login = function(userid, password) {
    /* Temporary local authentication - userid = user , password = password
    return $q(function (resolve, reject) {
      var defaultPassword = CryptoJS.SHA256(tempUser.password);
      console.log('userid again: ' + userid);
      console.log('defaultPassword: ' + defaultPassword);
      if (userid == tempUser.userid && angular.equals(hashPassword, defaultPassword)) {
        resolve('Login success.');
      } else {console.log('no');
        reject('userid or password is incorrect.');
      }
    });
    // Temporary local authentication - userid = user , password = password
*/
    //Actual http post call
    return $http.post('/api/authenticate', {userid: userid, password: password});
  };

  var newAccount = function(id, firstname, lastname, email, phone, password, type) {
    var hashPassword = CryptoJS.SHA256(password);
    return $http.post('/api/create_account',
      {userid: id, firstname: firstname, lastname: lastname, email: email, phone: phone, password: password, usertype: type});
  };

  var setUserInfo = function(data) {
    window.localStorage.setItem(STORAGE_KEYS.userInfo, JSON.stringify(data));
    console.log(window.localStorage.getItem(STORAGE_KEYS.userInfo));
    /*
    window.localStorage.setItem(STORAGE_KEYS.firstName, data.firstname);
    window.localStorage.setItem(STORAGE_KEYS.lastName, data.lastname);
    window.localStorage.setItem(STORAGE_KEYS.email, data.email);
    window.localStorage.setItem(STORAGE_KEYS.phoneNumber, data.phonenumber);
    window.localStorage.setItem(STORAGE_KEYS.userType, data.usertype);
    */
  };

  var setCredential = function(userid, password) {
    var hashPassword = CryptoJS.SHA256(password);
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
  }

  var logout = function() {
    clearCredential();
  };

  return {
    login: login,
    setCredential: setCredential,
    clearCredential: clearCredential,
    setUserInfo: setUserInfo,
    newAccount: newAccount,
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
    usertype: 'Player'
  };
  return {
    all: function() {
      return accounts;
    }
  };
});
