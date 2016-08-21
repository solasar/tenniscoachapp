angular.module('match')
.service('MatchService', function ($http, $ionicPopup, STORAGE_KEYS, SHOT_POSITIONS, SHOT_TYPES, ServerURL) {
  var localSetMatchShots = function (records) {
    var allRecords = JSON.parse(window.localStorage.getItem(STORAGE_KEYS.userRecords));
    console.log("All Records Before: ", allRecords);
    if (allRecords == null) {
      allRecords = [];
    }
    for (var i = 0; i < records.length; i++) {
      allRecords.push(records[i]);
    }
    console.log("All Records After: ", allRecords);
    window.localStorage.setItem(STORAGE_KEYS.userRecords, JSON.stringify(allRecords));
  };

  var postMatchShots = function (records) {
    console.log('match service postMatchShots', records);
    return $http.post(ServerURL + 'dinput', records);
  }

  var getShotTypeConsts = function () {
    var retArray = [];
    for (var i = 0; i < Object.keys(SHOT_TYPES).length; i++) {
      retArray.push({
        key: Object.keys(SHOT_TYPES)[i],
        value: SHOT_TYPES[Object.keys(SHOT_TYPES)[i]].name
      });
    }
    return retArray
  }

  var getShotPositionConsts = function () {
    var retArray = [];
    for (var i = 0; i < Object.keys(SHOT_POSITIONS).length; i++) {
      retArray.push({
        key: Object.keys(SHOT_POSITIONS)[i],
        value: SHOT_POSITIONS[Object.keys(SHOT_POSITIONS)[i]].name
      });
    }
    return retArray;
  }

  return {
    localSetMatchShots: localSetMatchShots,
    postMatchShots: postMatchShots,
    getShotTypeConsts: getShotTypeConsts,
    getShotPositionConsts: getShotPositionConsts
  }
});
