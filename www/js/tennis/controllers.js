angular.module('tennis')
.controller('CourtCtrl', function($state, $scope) {
  $scope.shot = function (zone) {
    console.log('Clicked a ' + zone + ' button');
    $scope.$emit('emit event');
  }
});
