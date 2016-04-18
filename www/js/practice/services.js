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

    var dataArr = [];
    /* var uid = window.localStorage.getItem(STORAGE_KEYS.userId);
     console.log("STATS TEST: " + uid); */
    $http.post('http://54.164.54.3/getZone', {username: "alpha"})
      .success(function (data, status, headers, config){
        var shots = data.response;
        console.log("post success");
        // Compute percentages per section.
      }).error(function (data, status, headers, config){
      console.log("post failed " + status);
    }).then(function (response) {
      // Init the data array
      for (var pos in TARGET_ZONES) {
        dataArr[TARGET_ZONES[pos]] = new Array(Object.keys(SHOT_TYPES).length).fill(0);
        for (var type in dataArr[0]) {
          dataArr[TARGET_ZONES[pos]][type] = {"Success":0, "Total":0, "Percent":0};
        }
      }
      //Compute %'s
      for (var i = 0; i < response.data.length; i++) {
        var zone = response.data[i]["Zone"];
        var type = response.data[i]["Type"] - 1; //Types don't index from 0, so reduce by 1.
        dataArr[zone][type]["Success"] += response.data[i]["Made"] * response.data[i]["Count(*)"];
        dataArr[zone][type]["Total"] += response.data[i]["Count(*)"];
      }
      for (var i = 0; i < dataArr.length; i++) {
        for (var type in dataArr[0]) {
          dataArr[i][type]["Percent"] = Math.round(100 * (dataArr[i][type]["Success"] / dataArr[i][type]["Total"]));
          console.log("ZONE: " + i + " TYPE: " + type + " PERCENT: " + dataArr[i][type]["Percent"]);
        }
      }
    });

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
