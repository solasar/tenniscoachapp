angular.module('tennis')
.controller('CourtCtrl', function($state, $scope, TARGET_ZONES) {
  $scope.shot = function (zone) {
    console.log('Clicked a ' + TARGET_ZONES[zone] + ' button');
    $scope.$emit('recordShotEvent', {hitzone: TARGET_ZONES[zone]});
  }
});
