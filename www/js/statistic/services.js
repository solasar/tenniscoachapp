angular.module('statistic')
  .service('StatisticService', function ($http, $ionicPopup, STORAGE_KEYS, SHOT_POSITIONS, SHOT_TYPES, TARGET_ZONES) {
    var getHeatMap = function (records) {
      // begin ugly testing stuff
      var dataArr = [];
      console.log("All Records After: ", allRecords);
      $http.post('http://54.164.54.3/getHeat', {username: "alpha"})
        .success(function (data, status, headers, config){
          var shots = data.response;
          console.log("post success");
          // Compute percentages per section.
        }).error(function (data, status, headers, config){
        console.log("post failed " + status);
      }).then(function (response) {
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
          dataArr[i]["Percent"] = Math.round(100 * (dataArr[i]["Success"] / dataArr[i]["Total"]));
          console.log("ZONE: " + i + " PERCENT: " + dataArr[i]["Percent"]);
        }
      });
    };

    return {
      heatMap: getHeatMap
    }
  });
