angular.module('exercise')

.controller('ExerciseCtrl', function ($scope, $rootScope, $state, $ionicPopup, TennisService, LEFT_SECTION, CENTER_SECTION, RIGHT_SECTION, STORAGE_KEYS, ExerciseService) {
  //Always assign the nav bar title from the parent view, using the var name 'title'
  $scope.title = 'Quick Exercise';

  $scope.userlevel = window.localStorage.getItem(STORAGE_KEYS.userSkill);

  var shotRecords = {
    left: [],
    center: [],
    right: []
  };

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

  $scope.$on('courtReadyForEvent', function (event, arg) {
    $rootScope.$broadcast('setCourtSectionEvent');
  });

  $scope.shot = TennisService.getShotOrderBySection(LEFT_SECTION);
  console.log('This is random shot order', $scope.shot);

  $scope.$on('recordShotEvent',function (event, arg) {
    console.log('Received event with args', arg.value);
    overallCount++;
    var shotHit;
    if (ExerciseService.exerciseShotHit(arg.value, $scope.shot.targetzone)) {
      shotHit = true;
    } else {
      shotHit = false;
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
      shotRecords.left.push({
        shotposition: $scope.shot.shotposition,
        shottype: $scope.shot.shottype,
        targetzone: $scope.shot.targetzone,
        success: ((shotHit)? '1' : '0')
      })
    } else if (overallCount <= (leftMaxShotNum + centerMaxShotNum)) {
      if (shotHit) {
        centerHitCount++;
        $scope.center.hit = centerHitCount * 10;
      } else {
        centerMissCount++;
        $scope.center.miss = centerMissCount * 10;
      }
      $scope.center.none = (centerMaxShotNum - centerHitCount - centerMissCount) * 10;
      shotRecords.center.push({
        shotposition: $scope.shot.shotposition,
        shottype: $scope.shot.shottype,
        targetzone: $scope.shot.targetzone,
        success: ((shotHit)? '1' : '0')
      })
    } else if (overallCount <= (leftMaxShotNum + centerMaxShotNum +rightMaxShotNum)) {
      if (shotHit) {
        rightHitCount++;
        $scope.right.hit = rightHitCount * 10;
      } else {
        rightMissCount++;
        $scope.right.miss = rightMissCount * 10;
      }
      $scope.right.none = (rightMaxShotNum - rightHitCount - rightMissCount) * 10;
      shotRecords.right.push({
        shotposition: $scope.shot.shotposition,
        shottype: $scope.shot.shottype,
        targetzone: $scope.shot.targetzone,
        success: ((shotHit)? '1' : '0')
      })
    } else {
      var alert = $ionicPopup.alert({
        title: 'Quick Exercise Error',
        template: 'Quick exercise should have finished already.'
      });
    }

    if (overallCount == (leftMaxShotNum + centerMaxShotNum + rightMaxShotNum)) {
      console.log('Finish exercise');
      $state.go('nav.exercise_result', {records: JSON.stringify(shotRecords)}, {reload: true});
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
    }
  })
})

.controller('ExerciseResultCtrl', function ($scope, $state, $stateParams) {
  var shotRecords = JSON.parse($stateParams.records);
  console.log('In Exercise Result', shotRecords);

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
  });

  shotRecords.center.forEach(function (entry) {
    if (entry.success == '1') {
      centerHit++;
    } else {
      centerMiss++;
    }
  });

  shotRecords.right.forEach(function (entry) {
    if (entry.success == '1') {
      rightHit++;
    } else {
      rightMiss++;
    }
  });

  $scope.leftPercentage = Math.round(leftHit / (leftHit + leftMiss) * 100);
  $scope.centerPercentage = Math.round(centerHit / (centerHit + centerMiss) * 100);
  $scope.rightPercentage = Math.round(rightHit / (rightHit + rightMiss) * 100);

  $scope.toExercise = function() {
    $state.go('nav.exercise', {}, {reload: true});
  };

  $scope.toHome = function() {
    $state.go('nav.dashboard', {}, {reload: true});
  };
});


