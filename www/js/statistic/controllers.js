angular.module('statistic')
.controller('StatsScoreCtrl', function ($scope, $rootScope, StatisticService) {
  console.log('In StatsScoreCtrl');
  var zoneStats = [12, 23, 35, 42, 53, 65, 71, 88, 93, 12, 11, 53, 93, 38, 52, 12, 58, 42, 18, 52, 82, 12, 60, 29, 100];
  var zoneStats2 = [62, 23, 56, 29, 75, 95, 3, 35, 91, 30, 95, 11, 23, 87, 12, 98, 22, 69, 88, 12, 42, 35, 93, 72, 100];

  var defaultMode = true; //score mode in this case

    StatisticService.heatMap().then(function (result) {
      console.log('heatMapValue function from service', result);
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
