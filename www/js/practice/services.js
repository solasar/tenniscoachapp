angular.module('practice')
.service('PracticeService', function ($http, $ionicPopup, STORAGE_KEYS, SHOT_POSITIONS, SHOT_TYPES, TARGET_ZONES) {
  var pushShotRecords = function (records) {
    var allRecords = JSON.parse(window.localStorage.getItem(STORAGE_KEYS.userRecords));
    console.log("All Records Before: ", allRecords);
    if (allRecords == null) {
      allRecords = [];
    }
    for (var i = 0; i < records.length; i++) {
      allRecords.push(records[i]);
    }

    /////////////////////
    // BEGIN UGLY TESTING

    // END UGLY TESTING
    /////////////////////

    console.log("All Records After: ", allRecords);
    window.localStorage.setItem(STORAGE_KEYS.userRecords, JSON.stringify(allRecords));
  };

  var getShotTypeConsts = function () {
    var retArray = [];
    for (var i = 0; i < Object.keys(SHOT_TYPES).length; i++) {
      retArray.push({
        key: Object.keys(SHOT_TYPES)[i],
        value: SHOT_TYPES[Object.keys(SHOT_TYPES)[i]]
      });
    }
    return retArray
  }

  var getShotPositionConsts = function () {
    var retArray = [];
    for (var i = 0; i < Object.keys(SHOT_POSITIONS).length; i++) {
      retArray.push({
        key: Object.keys(SHOT_POSITIONS)[i],
        value: SHOT_POSITIONS[Object.keys(SHOT_POSITIONS)[i]]
      });
    }
    return retArray;
  }

  return {
    pushShotRecords: pushShotRecords,
    getShotTypeConsts: getShotTypeConsts,
    getShotPositionConsts: getShotPositionConsts
  }
});
