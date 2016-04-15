angular.module('practice')
  .controller('PracticeCtrl', function ($scope, $state, $ionicPopup, $http, TennisService, STORAGE_KEYS, PracticeService) {
    //Always assign the nav bar title from the parent view, using the var name 'title'
    $scope.title = 'Practice';

    $scope.data = {};
    $scope.shot = {};

    $scope.$on('recordShotEvent', function (event, arg) {

      /*
      var PositionSelect = document.getElementById("ShotPosition");
      var positionS = PositionSelect.options[PositionSelect.selectedIndex].value;
      window.localStorage.setItem(STORAGE_KEYS.startPosition, positionS);
      console.log(positionS);

      var TypeSelect = document.getElementById("ShotType");
      var typeS = TypeSelect.options[TypeSelect.selectedIndex].value;
      window.localStorage.setItem(STORAGE_KEYS.shotType, typeS);
      console.log(typeS);
      */

      var typePopup = $ionicPopup.alert({
        title: 'Select Shot Type',
        template:
        '<ion-list overflow-scroll="true">'+
        '<ion-item> 0 </ion-item>'+
        '<ion-item> 0 </ion-item>'+
        '<ion-item> 0 </ion-item>'+
        '<ion-item> 1 </ion-item>'+
        '<ion-item> 1 </ion-item>'+
        '<ion-item> 1 </ion-item>'+
        '<ion-item> 1 </ion-item>'+
        '<ion-item> 0 </ion-item>'+
        '<ion-item> 0 </ion-item>'+
        '<ion-item> 0 </ion-item>'+
        '<ion-item> 1 </ion-item>'+
        '<ion-item> 1 </ion-item>'+
        '<ion-item> 1 </ion-item>'+
        '<ion-item> 1 </ion-item>'+
        '<ion-item> 0 </ion-item>'+
        '<ion-item> 0 </ion-item>'+
        '<ion-item> 0 </ion-item>'+
        '<ion-item> 1 </ion-item>'+
        '<ion-item> 1 </ion-item>'+
        '<ion-item> 1 </ion-item>'+
        '<ion-item> 1 </ion-item>'+
        '</ion-list>',
        buttons: [
          {
            text: 'OK',
            type: 'button-positive',
            onTap: function (e) {
              var positionPopup = $ionicPopup.alert({
                title: 'Select Start Position',
                template:
                '<ion-list overflow-scroll="true">'+
                '<ion-item> 0 </ion-item>'+
                '<ion-item> 0 </ion-item>'+
                '<ion-item> 0 </ion-item>'+
                '<ion-item> 1 </ion-item>'+
                '<ion-item> 1 </ion-item>'+
                '<ion-item> 1 </ion-item>'+
                '<ion-item> 1 </ion-item>'+
                '<ion-item> 0 </ion-item>'+
                '<ion-item> 0 </ion-item>'+
                '<ion-item> 0 </ion-item>'+
                '<ion-item> 1 </ion-item>'+
                '<ion-item> 1 </ion-item>'+
                '<ion-item> 1 </ion-item>'+
                '<ion-item> 1 </ion-item>'+
                '<ion-item> 0 </ion-item>'+
                '<ion-item> 0 </ion-item>'+
                '<ion-item> 0 </ion-item>'+
                '<ion-item> 1 </ion-item>'+
                '<ion-item> 1 </ion-item>'+
                '<ion-item> 1 </ion-item>'+
                '<ion-item> 1 </ion-item>'+
                '</ion-list>',
                buttons: [
                  {
                    text: 'OK',
                    type: 'button-positive',
                    onTap: function (e) {
                      console.log('Finished practice');
                      window.localStorage.setItem(STORAGE_KEYS.targetZone, arg.hitzone);
                      console.log(window.localStorage.getItem(STORAGE_KEYS.targetZone));
                      $state.go('nav.practice_result', {}, {reload: true});
                    }
                  }
                ]
              });
            }
          }
        ]
      });
    })
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
  })
