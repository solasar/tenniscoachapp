angular.module('statistic')
.controller('StatsScoreCtrl', function ($scope, $rootScope, StatisticService, $ionicModal, SHOT_TYPES) {
  //Always assign the nav bar title from the parent view, using the var name 'title'
  $scope.title = 'Statistic';
  console.log('In StatsScoreCtrl');
  var zoneStats = [12, 23, 35, 42, 53, 65, 71, 88, 93, 12, 11, 53, 93, 38, 52, 12, 58, 42, 18, 52, 82, 12, 60, 29, 100];
  var zoneStats2 = [62, 23, 56, 29, 75, 95, 3, 35, 91, 30, 95, 11, 23, 87, 12, 98, 22, 69, 88, 12, 42, 35, 93, 72, 100];

  var defaultMode = true; //score mode in this case

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
    defaultMode = true;
    $scope.header = 'Score Hit Map';
    $scope.content = 'Pink - Favorite score zone\nYellow - Avoided score zone';
    var element = document.getElementById('tabLeft');
    element.setAttribute('class', 'tab-item active');
    element.innerHTML = '<p><b>Score</b></p>';
    element = document.getElementById('tabRight');
    element.setAttribute('class','tab-item');
    element.innerHTML = '<p>Accuracy</p>';
    $rootScope.$broadcast('createHitMapEvent_Y2P', zoneStats);
  }

  $scope.accuracyStats = function () {
    defaultMode = false;
    $scope.header = 'Accuracy Hit Map';
    $scope.content = 'Red - High failure rate : Yellow - High success rate';
    var element = document.getElementById('tabLeft');
    element.setAttribute('class', 'tab-item');
    element.innerHTML = '<p>Score</p>';
    element = document.getElementById('tabRight');
    element.setAttribute('class','tab-item active');
    element.innerHTML = '<p><b>Accuracy</b></p>';
    $rootScope.$broadcast('createHitMapEvent_R2G', zoneStats2);
  };


  $scope.$on('courtReadyForEvent', function (event, arg) {
    console.log('In StatsScoreCtrl, received event', event);
    $scope.header = 'Score Hit Map';
    $scope.content = 'Pink - Favorite score zone : Yellow - Avoided score zone';

    StatisticService.heatMap().then(function (result) {
      $rootScope.$broadcast('createHitMapEvent_Y2P', result);
    });

  });

  $scope.$on('recordShotEvent', function (event, arg) {
    $scope.zone = [];
    for (var i = 0; i < zoneStats[arg.value].length; i++) {
      $scope.zone.push({
        shottype: SHOT_TYPES[Object.keys(SHOT_TYPES)[i]],
        shotrate: zoneStats[arg.value][i]
      });
    }
    $scope.modal.show();
  });
});
