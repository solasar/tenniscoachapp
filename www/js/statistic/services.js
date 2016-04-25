angular.module('statistic')
  .service('StatisticService', function ($http, $ionicPopup, STORAGE_KEYS, SHOT_POSITIONS, SHOT_TYPES, TARGET_ZONES, ServerURL) {
  var heatMapValues = function() {
    // NOTE: you should only return the post response here, don't do anything else
    // begin ugly testing stuff
    var dataArr = [];
    /* var uid = window.localStorage.getItem(STORAGE_KEYS.userId);
     console.log("STATS TEST: " + uid); */
     return $http.post(ServerURL + 'getHeat', {username: window.localStorage.getItem(STORAGE_KEYS.userId)})
       .then(function (response) {
       var dataArr = [];
       var retArr = [];
       // Init the data array
       for (var pos in TARGET_ZONES) {
         dataArr[TARGET_ZONES[pos]] = {"Success":0, "Total":0, "Percent":0};
       }
       //Compute %'s
       for (var i = 0; i < response.data.length; i++) {
         var zone = response.data[i]["Zone"];
         dataArr[zone]["Success"] += response.data[i]["Made"] * response.data[i]["Count(*)"];
         dataArr[zone]["Total"] += response.data[i]["Count(*)"];
       }
       for (var i = 0; i < dataArr.length; i++) {
         if (dataArr[i]["Total"] == 0) {
           dataArr[i]["Total"] = 1;
         }
         dataArr[i]["Percent"] = Math.round(100 * (dataArr[i]["Success"] / dataArr[i]["Total"]));
         //console.log("ZONE: " + i + " PERCENT: " + dataArr[i]["Percent"]);
       }
       //console.log("Check: " + dataArr.length);
       for (var i = 0; i < dataArr.length; i++) {
         retArr.push(dataArr[i]["Percent"]);
         //console.log("!!RETURN!! ZONE: " + i + " PERCENT: " + retArr[i]);
       }
       return retArr;
     });
  };

  var zoneStatValues = function() {
    // NOTE: you should only return the post response here, don't do anything else
    var dataArr = [];
    /* var uid = window.localStorage.getItem(STORAGE_KEYS.userId);
     console.log("STATS TEST: " + uid); */
    return $http.post('http://54.164.54.3/getZone', {username: window.localStorage.getItem(STORAGE_KEYS.userId)})
      .then(function (response) {
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
          if (dataArr[i][type]["Total"] == 0) {
            dataArr[i][type]["Total"] = 1;
          }
          dataArr[i][type]["Percent"] = Math.round(100 * (dataArr[i][type]["Success"] / dataArr[i][type]["Total"]));
          //console.log("ZONE: " + i + " TYPE: " + type + " PERCENT: " + dataArr[i][type]["Percent"]);
        }
      }
      var retArr = [];
      for (var i = 0; i < dataArr.length; i++) {
        for (var j in dataArr[0]) {
          if (!retArr[i]) {
            retArr[i] = [];
          }
          retArr[i][j] = dataArr[i][j]["Percent"];
        }
      }
      console.log('retArr from zoneStatValues', retArr);
      return retArr;
    });
  };

  return {
    heatMap: heatMapValues,
    zoneStat: zoneStatValues
  }
});

