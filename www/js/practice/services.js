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

    // // begin ugly testing stuff
    // var dataArr = [];
    // /* var uid = window.localStorage.getItem(STORAGE_KEYS.userId);
    // console.log("STATS TEST: " + uid); */
    // console.log("All Records After: ", allRecords);
    // $http.post('http://54.164.54.3/getHeat', {username: "alpha"})
    //   .success(function (data, status, headers, config){
    //     var shots = data.response;
    //     console.log("post success");
    //     // Compute percentages per section.
    // }).error(function (data, status, headers, config){
    //     console.log("post failed " + status);
    // }).then(function (response) {
    //   // Init the data array
    //   for (var pos in TARGET_ZONES) {
    //     dataArr[TARGET_ZONES[pos]] = {"Success":0, "Total":0, "Percent":0};
    //   }
    //   //Compute %'s
    //   for (var i = 0; i < response.data.length; i++) {
    //     var zone = response.data[i]["Zone"];
    //     dataArr[zone]["Success"] += response.data[i]["Made"] * response.data[i]["Count(*)"];
    //     dataArr[zone]["Total"] += response.data[i]["Count(*)"];
    //   }
    //   for (var i = 0; i < dataArr.length; i++) {
    //     dataArr[i]["Percent"] = Math.round(100 * (dataArr[i]["Success"] / dataArr[i]["Total"]));
    //     console.log("ZONE: " + i + " PERCENT: " + dataArr[i]["Percent"]);
    //   }
    // });
    // // Now do your summations and calculations
    // // end ugly testing stuff

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
