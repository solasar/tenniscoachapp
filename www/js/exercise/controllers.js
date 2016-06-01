angular.module('exercise')

.controller('ExerciseCtrl', function ($scope, $rootScope, $state, $ionicPopup, TennisService, LEFT_SECTION, CENTER_SECTION, RIGHT_SECTION, STORAGE_KEYS, ExerciseService) {
  //Always assign the nav bar title from the parent view, using the var name 'title'
  $scope.title = 'Perform Quick Exercise';

  $scope.userlevel = window.localStorage.getItem(STORAGE_KEYS.userSkill);

  var acceptZones = [];
  var username = window.localStorage.getItem(STORAGE_KEYS.userId);
  var pwhash = window.localStorage.getItem(STORAGE_KEYS.password);
  var allRecords = {
    left: [],
    center: [],
    right: []
  };;
  var record = {};

  var leftMaxShotNum = 10;
  var leftHitCount = 0;
  var leftMissCount = 0;
  var centerMaxShotNum = 10;
  var centerHitCount = 0;
  var centerMissCount = 0;
  var rightMaxShotNum = 10;
  var rightHitCount = 0;
  var rightMissCount = 0;
  var overallCount = 0;

  $scope.left = {
    hit: 0,
    miss: 0,
    none: 100
  }

  $scope.center = {
    hit: 0,
    miss: 0,
    none: 100
  }

  $scope.right = {
    hit: 0,
    miss: 0,
    none: 100
  }

  $scope.shot = TennisService.getShotOrderBySection(LEFT_SECTION);
  console.log('This is random shot order', $scope.shot);

  $scope.$on('courtReadyForEvent', function (event, arg) {
    $rootScope.$broadcast('setCourtSectionEvent');
    acceptZones = ExerciseService.exerciseAcceptZones($scope.shot.targetzone, $scope.userlevel);
    console.log('Acceptable Zones:', acceptZones);
    $rootScope.$broadcast('tintTargetZonesEvent', [$scope.shot.targetzone, acceptZones]);
  });

  $scope.$on('recordShotEvent',function (event, arg) {
    console.log('Received event with args', arg.value);
    $rootScope.$broadcast('setCourtSectionEvent');
    overallCount++;
    var shotHit;
    //if (ExerciseService.exerciseShotHit(arg.value, $scope.shot.targetzone, window.localStorage.getItem(STORAGE_KEYS.userSkill))) {
    if (acceptZones.indexOf(arg.value) == -1) {
      shotHit = false;
    } else {
      shotHit = true;
    }
    record = {
      username: username,
      pwhash: pwhash,
      start: $scope.shot.shotposition,
      type: $scope.shot.shottype,
      zone: $scope.shot.targetzone,
      success: ((shotHit)? '1' : '0')
    }
    if (overallCount <= leftMaxShotNum) {
      if (shotHit) {
        leftHitCount++;
        $scope.left.hit = leftHitCount * 10;
      } else {
        leftMissCount++;
        $scope.left.miss = leftMissCount * 10;
      }
      $scope.left.none = (leftMaxShotNum - leftHitCount - leftMissCount) * 10;
      allRecords.left.push(record);
    } else if (overallCount <= (leftMaxShotNum + centerMaxShotNum)) {
      if (shotHit) {
        centerHitCount++;
        $scope.center.hit = centerHitCount * 10;
      } else {
        centerMissCount++;
        $scope.center.miss = centerMissCount * 10;
      }
      $scope.center.none = (centerMaxShotNum - centerHitCount - centerMissCount) * 10;
      allRecords.center.push(record);
    } else if (overallCount <= (leftMaxShotNum + centerMaxShotNum +rightMaxShotNum)) {
      if (shotHit) {
        rightHitCount++;
        $scope.right.hit = rightHitCount * 10;
      } else {
        rightMissCount++;
        $scope.right.miss = rightMissCount * 10;
      }
      $scope.right.none = (rightMaxShotNum - rightHitCount - rightMissCount) * 10;
      allRecords.right.push(record);
    } else {
      var alert = $ionicPopup.alert({
        title: 'Quick Exercise Error',
        template: 'Quick exercise should have finished already.'
      });
    }

    if (overallCount == (leftMaxShotNum + centerMaxShotNum + rightMaxShotNum)) {
      console.log('Finish exercise');
      $state.go('nav.exercise_result', {records: JSON.stringify(allRecords)}, {reload: true});
    } else {
      var currentSection;
      if (overallCount < leftMaxShotNum) {
        currentSection = LEFT_SECTION;
      } else if (overallCount < leftMaxShotNum + centerMaxShotNum) {
        currentSection = CENTER_SECTION;
      } else if (overallCount < leftMaxShotNum + centerMaxShotNum + rightMaxShotNum) {
        currentSection = RIGHT_SECTION;
      } else {
        var alert = $ionicPopup.alert({
          title: 'Quick Exercise Error',
          template: 'Quick exercise should have finished already!'
        });
      }
      $scope.shot = TennisService.getShotOrderBySection(currentSection);
      acceptZones = ExerciseService.exerciseAcceptZones($scope.shot.targetzone, $scope.userlevel);
      $rootScope.$broadcast('tintTargetZonesEvent', [$scope.shot.targetzone, acceptZones]);
    }
  })
})

.controller('ExerciseResultCtrl', function ($scope, $state, $stateParams, $ionicPopup, $ionicLoading, ExerciseService) {
  $ionicLoading.show();
  var shotRecords = JSON.parse($stateParams.records);
  console.log('In Exercise Result', shotRecords);
  var allRecords = [];
  var leftHit = 0;
  var leftMiss = 0;
  var centerHit = 0;
  var centerMiss = 0;
  var rightHit = 0;
  var rightMiss = 0;
  shotRecords.left.forEach(function (entry) {
    if (entry.success == '1') {
      leftHit++;
    } else {
      leftMiss++;
    }
    allRecords.push(entry);
  });
  shotRecords.center.forEach(function (entry) {
    if (entry.success == '1') {
      centerHit++;
    } else {
      centerMiss++;
    }
    allRecords.push(entry);
  });
  shotRecords.right.forEach(function (entry) {
    if (entry.success == '1') {
      rightHit++;
    } else {
      rightMiss++;
    }
    allRecords.push(entry);
  });
  $scope.leftPercentage = Math.round(leftHit / (leftHit + leftMiss) * 100);
  $scope.centerPercentage = Math.round(centerHit / (centerHit + centerMiss) * 100);
  $scope.rightPercentage = Math.round(rightHit / (rightHit + rightMiss) * 100);

  console.log('exercise result controller', allRecords);
  ExerciseService.postExerciseShots(allRecords).then(function (success) {
    $ionicLoading.hide();
  }, function (err) {
    var alertPopup = $ionicPopup.alert({
      title: 'Post exercise shots data failed',
      template: 'Your exercise shots data have not been recorded in the server'
    });
    $ionicLoading.hide();
  })

  $scope.toExercise = function() {
    $state.go('nav.exercise', {}, {reload: true});
  };

  $scope.toHome = function() {
    $state.go('nav.dashboard', {}, {reload: true});
  };
});


