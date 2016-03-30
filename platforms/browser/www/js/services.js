angular.module('Services', ['utf8-base64', 'Constants'])
.service('AuthService', function($http , base64, $q, $ionicPopup, STORAGE_KEYS) {
  var isAuthenticated = false;


  var login = function(username, password) {
    var hashPassword = CryptoJS.SHA256(password);
    console.log('username: ' + username);
    console.log('password: ' + password);
    console.log('hashPassword:    ' + hashPassword);

    // Temporary local authentication - username = user , password = password
    return $q(function (resolve, reject) {
      var defaultPassword = CryptoJS.SHA256('password');
      console.log('username again: ' + username);
      console.log('defaultPassword: ' + defaultPassword);
      if (username == "user" && angular.equals(hashPassword, defaultPassword)) {
        console.log('yes');
        setCredential(username, hashPassword);
        resolve('Login success.');
      } else {console.log('no');
        reject('Username or password is incorrect.');
      }
    })
    // Temporary local authentication - username = user , password = password

    //Actual http post call
    //return $http.post('/api/authenticate', {username: username, password: hashPassword});
  };

  var setCredential = function(username, hashPassword) {
    var authData = base64.encode(username + ':' + hashPassword);
    $http.defaults.headers.common['Authorization'] = 'Basic ' + authData;
    window.localStorage.setItem(STORAGE_KEYS.userName, username);
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
  }

  return {
    login: login,
    clearCredential: clearCredential,
    isAuthenticated: function () {return isAuthenticated;},
    username: function () {return window.localStorage.getItem(STORAGE_KEYS.userName) || '';},
    password: function () {return window.localStorage.getItem(STORAGE_KEYS.password) || '';}
  };
})




.factory('Accounts', function () {
  var accounts = {
    username: 'user',
    password: 'password',
    firstname: 'Roger',
    lastname: 'Federer',
    age: '34',
    sex: 'male',
    height: '185cm'
  };
  return {
    all: function() {
      return accounts;
    }
  };
});
