angular.module('statistic')
.controller('StatsScoreCtrl', function ($scope, $rootScope, StatisticService, TARGET_ZONES) {
  console.log('In StatsScoreCtrl');
  var zoneStats = [12, 23, 35, 42, 53, 65, 71, 88, 93, 12, 11, 53, 93, 38, 52, 12, 58, 42, 18, 52, 82, 12, 60, 29, 100];
  var zoneStats2 = [62, 23, 56, 29, 75, 95, 3, 35, 91, 30, 95, 11, 23, 87, 12, 98, 22, 69, 88, 12, 42, 35, 93, 72, 100];

  var defaultMode = true; //score mode in this case

    // StatisticService.heatMap().then(function (result) {
    //   console.log('heatMapValue function from service', result);
    // });

  StatisticService.heatMap()
    .success(function (data, status, headers, config){
      var shots = data.response;
      console.log("post success");})
    .error(function (data, status, headers, config){
      console.log("post failed " + status);
    })
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
        console.log("ZONE: " + i + " PERCENT: " + dataArr[i]["Percent"]);
      }
      console.log("Check: " + dataArr.length);
      for (var i = 0; i < dataArr.length; i++) {
        retArr.push(dataArr[i]["Percent"]);
        console.log("!!RETURN!! ZONE: " + i + " PERCENT: " + retArr[i]);
      }

      return retArr;
    });
 /*
  StatisticService.zoneStat().then(function (result) {
    console.log('zoneStatValue function from service', result);
  });
*/
  $scope.scoreStats = function () {
    defaultMode = true;
    var element = document.getElementById('tabLeft');
    element.setAttribute('class', 'tab-item active');
    element.innerHTML = '<p><b>Score</b></p>';
    element = document.getElementById('tabRight');
    element.setAttribute('class','tab-item');
    element.innerHTML = '<p>Accuracy</p>';
    $rootScope.$broadcast('createHitMapEvent_Teal', zoneStats);
  }

  $scope.accuracyStats = function () {
    defaultMode = false;
    var element = document.getElementById('tabLeft');
    element.setAttribute('class', 'tab-item');
    element.innerHTML = '<p>Score</p>';
    element = document.getElementById('tabRight');
    element.setAttribute('class','tab-item active');
    element.innerHTML = '<p><b>Accuracy</b></p>';
    $rootScope.$broadcast('createHitMapEvent_R2G', zoneStats2);
  }


  $scope.$on('courtReadyForEvent', function (event, arg) {
    console.log('In StatsScoreCtrl, received event', event);
    $rootScope.$broadcast('createHitMapEvent_Teal', zoneStats);
  })



})
