angular.module('practice')
  .controller('PracticeCtrl', function ($scope, $state, $ionicPopup, $ionicModal, $http, SHOT_POSITIONS, SHOT_TYPES, TennisService, STORAGE_KEYS, PracticeService) {
    //Always assign the nav bar title from the parent view, using the var name 'title'
    $scope.title = 'Record Scoring Shots!';
    $scope.shotPosition = {value: 'This is the 1st shot'};
    $scope.shotType = {value: 'This is the 1st shot'};
    $scope.targetZone = {value: 'This is the 1st shot'};
    $scope.shotPositionConsts = [];
    $scope.shotTypeConsts = [];
    $scope.shotPositionConsts = PracticeService.getShotPositionConsts();
    $scope.shotTypeConsts = PracticeService.getShotTypeConsts();
    var shotRecords = [];
    var none = {
      key: 'None',
      value: 'None'
    }

    $scope.$on('recordShotEvent', function (event, arg) {
      $scope.shotPosition = none;
      $scope.targetZone = {
        key: arg.key,
        value: arg.value
      }
      var positionPopup = $ionicPopup.show({
        title: 'Select Shot Position',
        scope: $scope,
        template: '<ion-list overflow-scroll="true">' +
        ' <ion-radio ng-repeat="position in shotPositionConsts" ng-model="$parent.$parent.shotPosition" ng-value="{key: position.key, value: position.value}" ng-click="nextPopup()">' +
        '   <p>{{position.value}}<p>' +
        ' </ion-radio>' +
        '</ion-list>',
        buttons: [
          {
            text: 'Position Unknown',
            type: 'button-positive',
            onTap: function () {
              $scope.shotPosition = none;
              console.log('User does not want to input shot position.');
              $scope.nextPopup();
            }
          },
          {
            text: 'Cancel',
            type: 'button-positive'
          }
        ]
      });

      $scope.nextPopup = function () {
        $scope.showShotTypePopup();
        positionPopup.close();
      }
    });

    $scope.showShotTypePopup = function () {
      $scope.shotType = none;
      var typePopup = $ionicPopup.show({
        title: 'Select Shot Type',
        scope: $scope,
        template: '<ion-list overflow-scroll="true">' +
        ' <ion-radio ng-repeat="type in shotTypeConsts" ng-model="$parent.$parent.shotType" ng-value="{key: type.key, value: type.value}" ng-click="recordShot()">' +
        '   <p>{{type.value}}</p>' +
        '</ion-radio>' +
        '</ion-list>',
        buttons: [{
          text: 'Type Unknown',
          type: 'button-positive',
          onTap: function () {
            $scope.shotType = none;
            console.log('User does not want to input shot type.');
            $scope.recordShot();
          }
        },
          {
            text: 'Cancel',
            type: 'button-positive'
          }
        ]
      });

      $scope.recordShot = function () {
        typePopup.close();
        shotRecords.push({
          shotposition: $scope.shotPosition.key,
          shottype: $scope.shotType.key,
          targetzone: $scope.targetZone.key
        });
        console.log('Check Type Key: ', $scope.shotType.key);
        console.log('Shot Position: ' , $scope.shotPosition.key);
        console.log('Target Zone: ' , $scope.targetZone.key);
      }
      console.log("You clicked something in list");
    };

    $scope.submitRecord = function () {
      console.log('Display record: ', shotRecords);
      PracticeService.pushShotRecords(shotRecords);
      $state.go('nav.practice_result', {records: JSON.stringify(shotRecords)}, {reload: true});
    };
  })


  .controller('PracticeStartCtrl', function($scope, $state) {
    $scope.toRandom = function() {
      console.log("PracticeStartCtrl toRandom() reached");
      $state.go('nav.practice', {}, {reload: true});
    };

    $scope.toCoach = function() {
      console.log("Need to get Data from coach, which currently cannot be entered");
    };
  })

  .controller('PracticeResultCtrl', function ($scope, $state, $stateParams) {
    var shotRecords = JSON.parse($stateParams.records);
    console.log('In PracticeResultCtrl', shotRecords);
    $scope.recordNum = shotRecords.length;
    $scope.toRandom = function() {
      $state.go('nav.practice', {}, {reload: true});
    };

    $scope.toHome = function() {
      $state.go('nav.dashboard', {}, {reload: true});
    };
  });
