angular.module('statistic')
.controller('StatsScoreCtrl', function ($scope, $rootScope, StatisticService, $ionicModal, SHOT_TYPES) {
  //Always assign the nav bar title from the parent view, using the var name 'title'
  $scope.title = 'Statistic';
  console.log('In StatsScoreCtrl');
  //var tempZoneStats1 = [12, 23, 35, 42, 53, 65, 71, 88, 93, 12, 11, 53, 93, 38, 52, 12, 58, 42, 18, 52, 82, 12, 60, 29, 100];
  //var tempZoneStats2 = [62, 23, 56, 29, 75, 95, 3, 35, 91, 30, 95, 11, 23, 87, 12, 98, 22, 69, 88, 12, 42, 35, 93, 72, 100];

  var isAccuracyMode = true;
  /*
  StatisticService.zoneStat().then(function (result) {
    zoneStats = result;
  })
*/

  /*
  StatisticService.heatMap().then(function (result) {
   console.log('heatMapValue function from service', result);
  });
  */

  $ionicModal.fromTemplateUrl('templates/zone_stats_modal.html',function ($ionicModal) {
    $scope.modal = $ionicModal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  })


  $scope.scoreStats = function () {
    isAccuracyMode = false;
    $scope.header = 'Score Hit Map';
    $scope.content1 = 'Pink - Favorite score zone';
    $scope.content2 = 'Yellow - Avoided score zone';
    var element = document.getElementById('tabLeft');
    element.setAttribute('class', 'tab-item active');
    element.innerHTML = '<p><b>Score</b></p>';
    element = document.getElementById('tabRight');
    element.setAttribute('class','tab-item');
    element.innerHTML = '<p>Accuracy</p>';
    StatisticService.scoreHeatMap().then(function (result) {
      $rootScope.$broadcast('createHitMapEvent_Y2P', result);
    });
  }

  $scope.accuracyStats = function () {
    isAccuracyMode = true;
    $scope.header = 'Accuracy Hit Map';
    $scope.content1 = 'Red - High failure rate';
    $scope.content2 = 'Green - High success rate';
    var element = document.getElementById('tabLeft');
    element.setAttribute('class', 'tab-item');
    element.innerHTML = '<p>Score</p>';
    element = document.getElementById('tabRight');
    element.setAttribute('class','tab-item active');
    element.innerHTML = '<p><b>Accuracy</b></p>';
    StatisticService.accuracyHeatMap().then(function (result) {
      $rootScope.$broadcast('createHitMapEvent_R2G', result);
    });
  };


  $scope.$on('courtReadyForEvent', function (event, arg) {
    console.log('In StatsScoreCtrl, received event', event);
    $scope.header = 'Score Hit Map';
    $scope.content1 = 'Red - High failure rate';
    $scope.content2 = 'Green - High success rate';

    StatisticService.accuracyHeatMap().then(function (result) {
      $rootScope.$broadcast('createHitMapEvent_R2G', result);
    });
  });

  $scope.$on('recordShotEvent', function (event, arg) {
    $scope.zone = [];
    //console.log('Zone Stats', zoneStats);

    if (isAccuracyMode) {
      StatisticService.zoneAccuracyStat(arg.value).then(function (result) {
        Object.keys(result).forEach(function (key, index) {
          $scope.zone.push({
            shottype: key,
            shotrate: result[key]['accuracy'],
            shotcount: result[key]['total']
          });
        });
      });
    } else {
      StatisticService.zoneScoreStat(arg.value).then(function (result) {
        for (var i = 0; i < result.length; i++) {
          $scope.zone.push({
            shotcount: result[i]['shotCount'],
            shottype: result[i]['shotType'],
            shotposition: result[i]['shotPosition']
          });
        }
      });
    }
    $scope.accuracyModel = isAccuracyMode;
    console.log('accuracy mode is on?', $scope.accuracyMode);
    $scope.modal.show();
  });
});
