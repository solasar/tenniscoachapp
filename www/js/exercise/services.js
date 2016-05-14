angular.module('exercise')
.service('ExerciseService', function ($http, STORAGE_KEYS, $ionicPopup, USER_SKILLS, ServerURL) {
  //expect parameters to be an integer between 0~24
  var exerciseShotHit = function (hitzone, targetzone, userLevel) {
    if (userLevel == USER_SKILLS.beginner) {
      return beginnerShotHit(hitzone, targetzone);
    } else if (userLevel == USER_SKILLS.intermediate) {
      return intermediateShotHit(hitzone, targetzone);
    } else if (userLevel == USER_SKILLS.expert) {
      return expertShotHit(hitzone, targetzone);
    } else {
      var alert = $ionicPopup.alert({
        title: 'Cannot find user skill level',
        template: 'Pleaes make sure user acquired a skill level'
      });
    }
  }

  var beginnerShotHit = function (hitzone, targetzone) {
    if (hitzone == 0) {
      return false;
    } else {
      var hit = hitzone - 1;
      var target = (targetzone - 1);
      if ((Math.abs((hit % 8) - (target % 8)) <= 1) && (Math.abs(Math.floor(hit / 8) - Math.floor(target / 8)) <= 1)) {
        return true;
      } else {
        return false;
      }
    }
  };

  var intermediateShotHit = function (hitzone, targetzone) {
    if (hitzone == 0) {
      return false;
    } else {
      var hit = hitzone - 1;
      var target = targetzone - 1;
      //check if hit zone and target zone are in same row area
      if (Math.floor(hit / 8) != Math.floor(target / 8)) {
        return false;
      } else {
        if (Math.abs((target % 8) - (hit % 8)) <= 1) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  var expertShotHit = function (hitzone, targetzone) {
    if (hitzone == 0) {
      return false;
    } else if (hitzone == targetzone) {
      return true;
    } else {
      return false;
    }
  };

  var postExerciseShots = function (records) {
    console.log('exercise service postExerciseShots', records);
    return $http.post(ServerURL + 'dinput', records);
  }

  return {
    exerciseShotHit: exerciseShotHit,
    beginnerShotHit: beginnerShotHit,
    intermediateShotHit: intermediateShotHit,
    expertShotHit: expertShotHit,
    postExerciseShots: postExerciseShots
  };
})
