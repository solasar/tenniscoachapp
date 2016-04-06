angular.module('tennis')
.service('TennisService', function(SHOT_TYPES, SHOT_POSITIONS, TARGET_ZONES) {

  var getShotPosition = function() {
    var shotPositionSize = Object.keys(SHOT_POSITIONS).length;
    return Object.keys(SHOT_POSITIONS)[Math.random() % shotPositionSize];
  }

  var getShotType = function (shotposition) {
    var shotTypeSize = Object.keys(SHOT_TYPES).length;
    var randomShotType;
    while (true) {
      randomShotType = Object.keys(SHOT_TYPES)[Math.random() % shotTypeSize];
      if (randomShotType == SHOT_TYPES.serve && (shotposition != SHOT_POSITIONS.behindLeftBaseline ||
          shotposition != SHOT_POSITIONS.behindCenterBaseline || shotposition != SHOT_POSITIONS.behindRightBaseline)) {
        continue;
      } else if (randomShotType == SHOT_TYPES.volley && (shotposition != SHOT_POSITIONS.leftServiceBox ||
          shotposition != SHOT_POSITIONS.centerServiceBox || shotposition != SHOT_POSITIONS.rightServiceBox)) {
        continue;
      } else {
        break;
      }
    }
    return randomShotType;
  }

  var getTargetZone = function (shottype) {
    //Hard-coded count of serve shot target zones
    var serveZoneSize = 8;
    var targetZoneSize = Object.keys(TARGET_ZONES).length;
    if (shottype == SHOT_TYPES.serve) {
      return Object.keys(TARGET_ZONES)[Math.random() % serveZoneSize + 1];
    } else {
      return Object.keys(TARGET_ZONES)[Math.random() % targetZoneSize + 1];
    }
  }
})
