angular.module('assessment')
  .controller('AssessCtrl', function ($scope, $state, $ionicPopup, $http) {
    $scope.$on('emit event', function () {
      console.log('Received the emit message!');
    })
  })
