angular.module('assessment')
.service('AssessService', function ($http, $ionicPopup, STORAGE_KEYS) {


  var generateAttempt = function() {
    var attempt = {
      shotFrom: getRandom(),
      shotTo: getRandom()

    }
    return
  }

  var getRandomOneDigitNum = function () {
    return Math.floor(Math.random() * 10);
  }


})

.factory('AssessTest', function() {
  var tests = {

  }
})
