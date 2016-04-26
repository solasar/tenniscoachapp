angular.module('practice')
  .controller('PracticeCtrl', function ($scope, $state, $ionicPopup, $ionicModal, $http, SHOT_POSITIONS, SHOT_TYPES, TennisService, STORAGE_KEYS, PracticeService) {
    //Always assign the nav bar title from the parent view, using the var name 'title'
    $scope.title = 'Practice';

    $scope.targetZone = 'This is 1st shot';

    $scope.shotPositionConsts = [];
    for (var i = 0; i < Object.keys(SHOT_POSITIONS).length; i++) {
      $scope.shotPositionConsts.push({
        key: Object.keys(SHOT_POSITIONS)[i],
        value: SHOT_POSITIONS[Object.keys(SHOT_POSITIONS)[i]]
      });
      console.log($scope.shotPositionConsts[i]);
    }
    $scope.shotPosition = 'This is 1st shot';



    $scope.shotTypeConsts = [];
    for (var i = 0; i < Object.keys(SHOT_TYPES).length; i++) {
      $scope.shotTypeConsts.push({
        key: Object.keys(SHOT_TYPES)[i],
        value: SHOT_TYPES[Object.keys(SHOT_TYPES)[i]]
      });
      console.log($scope.shotTypeConsts[i]);
    }
    $scope.shotType = {};


    var recordShot = function () {

      console.log('Check Type Key: ', $scope.shotType.key);
      console.log('Shot Position: ' + $scope.shotPosition.key);
      console.log('Shot Type: ' + $scope.shotType.value);
      console.log('Target Zone: ' + $scope.targetZone);
    }


    $scope.showShotTypePopup = function () {
      $scope.shotType = null;
      var typePopup = $ionicPopup.show({
        title: 'Select Shot Type',
        scope: $scope,
        template: '<ion-list overflow-scroll="true">' +
        ' <ion-radio ng-repeat="type in shotTypeConsts" ng-model="$parent.$parent.shotType" ng-value="{key: type.key, value: type.value}">' +
        '   <p>{{type.value}}</p>' +
        '</ion-radio>' +
        '</ion-list>',
        buttons: [{
          type: 'button-positive ion-close-round',
          onTap: function () {
            $scope.shotType = null;
            console.log('User does not want to input shot type.')
          }
        }, {
          type: 'button-positive ion-checkmark-round',
          onTap: function () {
            recordShot();
          }
        }]
      })

      console.log("You clicked something in list");

    }


    $scope.data = {};;
    $scope.shot = {};

    $scope.$on('recordShotEvent', function (event, arg) {
      $scope.shotPosition = null;
      $scope.targetZone = arg.value;
      var positionPopup = $ionicPopup.show({
        title: 'Select Shot Position',
        scope: $scope,
        template: '<ion-list overflow-scroll="true">' +
        ' <ion-radio ng-repeat="position in shotPositionConsts" ng-model="$parent.$parent.shotPosition" ng-value="{key: position.key, value: position.value}" ng-click="closing()">' +
        '   <p>{{position.value}}<p>' +
        ' </ion-radio>' +
        '</ion-list>',
        buttons: [{
          type: 'button-positive ion-close-round',
          onTap: function() {
            console.log('User does not want to input shot position.');
          }
        }, {
          type: 'button-positive ion-checkmark-round',
          onTap: function() {
            $scope.showShotTypePopup();
          }
        }]
      });
      $scope.closing = function () {
        $scope.showShotTypePopup();
        positionPopup.close();
      }
    });
  })

  .directive("pickLista", function ($ionicPopup) {
    var directive = {};

    directive.restrict = 'E';
    directive.template = '<button class="button-clear <button->                </button->positive">{{model.name}} </button>';

    directive.scope = {
      items: "=lista",
      model: "=model",
      title: "=title"
    }

    directive.link = function (scope, elem, attrs) {
      elem.bind('click', function () {
        var title =  attrs.heading;
        scope.popup = $ionicPopup.show({
          title: title,
          template: '<ion-radio ng-repeat="item in items" ng-value="item" ng-model="model" ng-change="onChangeModel(item)">{{ item.name }}</ion-radio>',
          buttons: [{
            text: 'Ok'
          }],
          scope: scope
        });
      })

      scope.onChangeModel = function (item) {
        scope.popup.close();
        scope.model = item;
      }

    }

    return directive;
  })


  .controller('PracticeStartCtrl', function($scope, $state, $ionicPopup, $http, STORAGE_KEYS, PracticeService) {
    $scope.toRandom = function() {
      console.log("PracticeStartCtrl toRandom() reached");
      $state.go('nav.practice', {}, {reload: true});
    };

    $scope.toCoach = function() {
      console.log("Need to get Data from coach, which currently cannot be entered");
    };
  })
  .controller('PracticeResultCtrl', function ($scope, $state, STORAGE_KEYS) {
    console.log('In PracticeResultCtrl');
    $scope.toRandom = function() {
      $state.go('nav.practice', {}, {reload: true});
    };

    $scope.toHome = function() {
      $state.go('nav.dashboard', {}, {reload: true});
    };
  });
