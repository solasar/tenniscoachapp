angular.module('exercise')
.service('ExerciseService', function ($http, STORAGE_KEYS, $ionicPopup, USER_SKILLS, ServerURL) {
  /*
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
  */

  //Newly added function to determine the accepted target zones for expert level player.
  var expertAcceptZones = function (targetZone) {
    if (targetZone == 0) {
      return null;
    } else {
      return [parseInt(targetZone)];
    }
  }

  //Newly added function to determine the accepted target zones for intermediate level player.
  var intermediateAcceptZones = function (targetZone) {
    var zones = expertAcceptZones(targetZone);
    if (zones == null) {
      return null;
    } else {
      var targetZone = parseInt(targetZone);
      if ((targetZone - 1) % 8 != 0) {
        zones.push(targetZone - 1);
      }
      if ((targetZone - 1) % 8 != 7) {
        zones.push(targetZone + 1);
      }
      console.log('intermediate zones added', zones);
      return zones;
    }
  }

  //Newly added function to determine the accepted target zones for beginner level player.
  var beginnerAcceptZones = function (targetZone) {
    var zones = intermediateAcceptZones(targetZone);
    if (zones == null) {
      return null;
    } else {
      var targetZone = parseInt(targetZone);
      if (targetZone - 8 > 0) {
        zones.push(targetZone - 8); //accept zone above the target

        if ((targetZone - 1) % 8 != 0) {
          zones.push((targetZone - 8) - 1); //accept zone top left of the target
        }
        if ((targetZone - 1) % 8 != 7) {
          zones.push((targetZone - 8) + 1); //accept zone top right of the target
        }
      }
      if (targetZone + 8 < 25) {
        zones.push(targetZone + 8); //accept zone below the target

        if ((targetZone - 1) % 8 != 0) {
          zones.push((targetZone + 8) - 1); //accept zone left below the target
        }
        if ((targetZone - 1) % 8 != 7) {
          zones.push((targetZone + 8) + 1); //accept zone right below the target
        }
      }
      console.log('beginner zones added', zones);
      return zones;
    }
  };
  
  var exerciseAcceptZones = function (targetZone, userLevel) {
    if (userLevel == USER_SKILLS.beginner) {
      return beginnerAcceptZones(targetZone);
    } else if (userLevel == USER_SKILLS.intermediate) {
      return intermediateAcceptZones(targetZone);
    } else if (userLevel == USER_SKILLS.expert) {
      return expertAcceptZones(targetZone);
    } else {
      var alert = $ionicPopup.alert({
        title: 'Cannot find user skill level',
        template: 'Please make sure user acquired a skill level'
      });
    }
  }

  var postExerciseShots = function (records) {
    console.log('exercise service postExerciseShots', records);
    return $http.post(ServerURL + 'dinput', records);
  }




  return {
    expertAcceptZones: expertAcceptZones,
    intermediateAcceptZones: intermediateAcceptZones,
    beginnerAcceptZones: beginnerAcceptZones,
    exerciseAcceptZones: exerciseAcceptZones,
    postExerciseShots: postExerciseShots
  };
})
