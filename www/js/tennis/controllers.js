angular.module('tennis')
.controller('CourtCtrl', function($state, $scope, TARGET_ZONES, TennisService) {
  console.log('In CourtCtrl');
  $scope.shot = function (zone) {
    console.log('Clicked a ' + TARGET_ZONES[zone] + ' button');
    $scope.$emit('recordShotEvent', {key: zone, value: TARGET_ZONES[zone]});
    //var zoneStats = [12, 23, 35, 42, 53, 65, 71, 88, 93, 12, 11, 53, 93, 38, 52, 12, 58, 42, 18, 52, 82, 12, 60, 29, 100];
    //TennisService.setHitMap(zoneStats);
  }
  $scope.$on('createHitMapEvent_Y2G', function (event, arg) {
    TennisService.setHitMap_Y2G(arg);
  })

  $scope.$on('createHitMapEvent_R2G', function (event, arg) {
    TennisService.setHitMap_R2G(arg);
  })

  $scope.$on('createHitMapEvent_Teal', function (event, arg) {
    TennisService.setHitMap_Teal(arg);
  })

  $scope.$on('createHitMapEvent_Y2P', function (event, arg) {
    TennisService.setHitMap_Y2P(arg);
  })
  
  $scope.$on('setCourtSectionEvent', function (event, arg) {
    TennisService.setCourtSection();
  })
  


  $scope.$emit('courtReadyForEvent');
});
