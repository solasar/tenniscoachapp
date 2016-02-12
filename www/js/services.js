angular.module('starter')

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
