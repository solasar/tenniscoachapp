angular.module('statistic')
.service('PracticeService', function ($http, $ionicPopup, STORAGE_KEYS, SHOT_POSITIONS, SHOT_TYPES) {

  var heatMapValues = function() {
    var retArr = [];
    var id = JSON.parse(window.localStorage.getItem(STORAGE_KEYS.userId));
    console.log("STATS TEST: " + id);
    //var data = $http.post('http://54.164.54.3/getHeat', {userid: id});
    //console.log("post returned: " + data);
    return retArr;
  };

  var zoneStatValues = function() {
    var retArr = [];
    return retArr;
  };

});
