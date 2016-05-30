angular.module('statistic')
  .service('StatisticService', function ($http, $ionicPopup, STORAGE_KEYS, SHOT_POSITIONS, SHOT_TYPES, TARGET_ZONES, ServerURL) {
  var accuracyHeatMapValues = function() {
    // NOTE: you should only return the post response here, don't do anything else
    // begin ugly testing stuff

    /* var uid = window.localStorage.getItem(STORAGE_KEYS.userId);
     console.log("STATS TEST: " + uid); */
     return $http.post(ServerURL + 'getAccuracyHeat', {username: window.localStorage.getItem(STORAGE_KEYS.userId)})
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
    
    var scoreHeatMapValues = function () {
      return $http.post(ServerURL + 'getScoreHeat', {username: window.localStorage.getItem(STORAGE_KEYS.userId)}).then(function (response) {
        var dataArr = [];
        var retArr = [];
        var totalShots = 0;
        for (var zone in TARGET_ZONES) {
          retArr[TARGET_ZONES[zone]] = 0;
        }
        for (var i = 0; i < response.data.length; i++) {
          totalShots += response.data[i]['Count(*)'];
        }
        for (var i = 0; i < response.data.length; i++) {
          var zone = response.data[i]['Zone'];
          retArr[zone] += Math.round(100 * response.data[i]['Count(*)'] / totalShots);
        }
        return retArr;
      });
    };

  var zoneAccuracyStatValues = function(selectedZone) {
    // NOTE: you should only return the post response here, don't do anything else
    var dataArr = [];
    /* var uid = window.localStorage.getItem(STORAGE_KEYS.userId);
     console.log("STATS TEST: " + uid); */
    return $http.post(ServerURL + 'getZoneAccuracy', {username: window.localStorage.getItem(STORAGE_KEYS.userId), zone: selectedZone})
      .then(function (response) {
      
      //Compute %'s
        for (var i = 0; i < response.data.length; i++) {
          //var zone = response.data[i]["Zone"];
          var type = response.data[i]["Type"];
          console.log('Keun Type: ', type);
          console.log('KEUN: ', response.data);
          if (typeof dataArr[type] === 'undefined') {
            dataArr[type] = {"Success":0, "Total":0};
          }
          dataArr[type]["Success"] += response.data[i]["Made"] * response.data[i]["Count(*)"];
          dataArr[type]["Total"] += response.data[i]["Count(*)"];
        }

        var retArr = [];
        Object.keys(dataArr).forEach(function (key, index) {
          if (dataArr[key]['Total'] == 0) {
            dataArr[key]['Total'] == 1;
          }
          retArr[key] = {
            accuracy: Math.round(100 * (dataArr[key]["Success"] / dataArr[key]["Total"])),
            total: dataArr[key]['Total']
          };
        });
      console.log('retArr from zoneStatValues', retArr);
      return retArr;
    });
  };

    var zoneScoreStatValues = function (selectedZone) {
      return $http.post(ServerURL + 'getZoneScore', {
        username: window.localStorage.getItem(STORAGE_KEYS.userId),
        zone: selectedZone
      }).then(function (response) {
        var retArr = [];
        for (var i = 0; i < response.data.length; i++) {
          retArr[i] = {
            shotCount: response.data[i]['Count(*)'],
            shotType: response.data[i]['Type'],
            shotPosition: response.data[i]['startingPosition']
          };
        }
        return retArr;        
      });
    };
    
  return {
    accuracyHeatMap: accuracyHeatMapValues,
    zoneAccuracyStat: zoneAccuracyStatValues,
    scoreHeatMap: scoreHeatMapValues,
    zoneScoreStat: zoneScoreStatValues
  }
});

