angular.module('match')
  .controller('MatchCtrl', function ($scope, $state, $ionicPopup, $ionicModal, $http, SHOT_POSITIONS, SHOT_TYPES, TennisService, STORAGE_KEYS, MatchService) {
    //Always assign the nav bar title from the parent view, using the var name 'title'
    $scope.title = 'Record Scoring Shots';
    $scope.shotPosition = {value: 'This is the 1st shot'};
    $scope.shotType = {value: 'This is the 1st shot'};
    $scope.targetZone = {value: 'This is the 1st shot'};
    $scope.shotPositionConsts = [];
    $scope.shotTypeConsts = [];
    $scope.shotPositionConsts = MatchService.getShotPositionConsts();
    $scope.shotTypeConsts = MatchService.getShotTypeConsts();
    var none = {
      key: 'None',
      value: 'None'
    }

    var username = window.localStorage.getItem(STORAGE_KEYS.userId);
    var pwhash = window.localStorage.getItem(STORAGE_KEYS.password);
    var allRecords = [];
    var record = [];


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
        ' </ion-radio>' +
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
        record = {
          username: username,
          pwhash: pwhash,
          type: $scope.shotType.value,
          zone: $scope.targetZone.value,
          success: null,
          start: $scope.shotPosition.value
        };
        allRecords.push(record);
        console.log('Check Type Key: ', $scope.shotType.key);
        console.log('Shot Position: ' , $scope.shotPosition.key);
        console.log('Target Zone: ' , $scope.targetZone.key);
      }
      console.log("You clicked something in list");
    };

    $scope.submitRecord = function () {
      console.log('Display record: ', allRecords);
      MatchService.localSetMatchShots(allRecords);
      $state.go('nav.match_result', {records: JSON.stringify(allRecords)}, {reload: true});
    };
  })

  .controller('MatchResultCtrl', function ($scope, $state, $stateParams, $ionicLoading, $ionicPopup, MatchService) {
    $ionicLoading.show();
    var shotRecords = JSON.parse($stateParams.records);
    console.log('In MatchResultCtrl', shotRecords);
    $scope.recordNum = shotRecords.length;
    MatchService.postMatchShots(shotRecords).then(function (success) {
      $ionicLoading.hide();
    }, function (err) {
      var alertPopup = $ionicPopup.alert({
        title: 'Post match shots data failed',
        template: 'Your match shots data have not been recorded in the server'
      });
      $ionicLoading.hide();
    })



    $scope.toMatch = function() {
      $state.go('nav.match', {}, {reload: true});
    };

    $scope.toHome = function() {
      $state.go('nav.dashboard', {}, {reload: true});
    };
  });
