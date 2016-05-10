angular.module('assessment')
  .controller('AssessCtrl', function ($scope, $state, $ionicPopup, $http, TennisService, STORAGE_KEYS, AssessService) {
    //Always assign the nav bar title from the parent view, using the var name 'title'
    $scope.title = 'Test Your Skills!';

    var maxShotNum = 10;
    var hitCount = 0;
    var missCount = 0;

    var username = window.localStorage.getItem(STORAGE_KEYS.userId);
    var pwhash = window.localStorage.getItem(STORAGE_KEYS.password);
    var allRecords = [];
    var record = [];

    $scope.bar = {
      hit: 0,
      miss: 0,
      none: 100
    }

    $scope.shot = {};
    $scope.count = {
      shotcount: hitCount + missCount,
      maxshotnum:  maxShotNum
    }
    $scope.shot = TennisService.getShotOrder();
    console.log('This is random shot order', $scope.shot);

    $scope.$on('recordShotEvent', function (event, arg) {
      console.log('Received event', event);
      console.log('With args -> ' + arg.value);

      if ($scope.shot.targetzone == arg.value) {
        hitCount++;
        $scope.bar.hit = hitCount * 10;
      } else {
        missCount++;
        $scope.bar.miss = missCount * 10;
      }
      record = {
        username: username,
        pwhash: pwhash,
        type: $scope.shot.shottype,
        zone: $scope.shot.targetzone,
        success: ($scope.shot.targetzone == arg.value) ? "1" : "0",
        start: $scope.shot.shotposition
      };
      allRecords.push(record);
      console.log("assessment controller all records", allRecords);

      $scope.count.shotcount = hitCount + missCount;
      $scope.bar.none = (maxShotNum - $scope.count.shotcount) * 10;

      if (hitCount + missCount >= maxShotNum) {
        console.log('Finished assessment');
        window.localStorage.setItem(STORAGE_KEYS.userSkill, AssessService.calcSkillLevel(hitCount));
        console.log(window.localStorage.getItem(STORAGE_KEYS.userSkill));
        $state.go('nav.assessment_result', {records: JSON.stringify(allRecords)}, {reload: true});

      } else {
        $scope.shot = TennisService.getShotOrder();
        console.log('This is random shot order', $scope.shot);
        console.log('Hit: ' + hitCount + ', Miss: ' + missCount);
      }

    })
  })
  .controller('AssessResultCtrl', function ($scope, $state, $stateParams, $ionicPopup, AssessService, STORAGE_KEYS) {
    console.log('In AssessResultCtrl');
    var shotRecords = JSON.parse($stateParams.records);
    $scope.level = window.localStorage.getItem(STORAGE_KEYS.userSkill);
    AssessService.postAssessmentShots(shotRecords).then(function (success) {
      console.log("AssessResultCtrl was success");

    }, function (err) {
      var alertPopup = $ionicPopup.alert({
        title: 'Post assessment shots data failed',
        template: 'Your assessment shots data has not been recorded in server'
      });
    });
  })


