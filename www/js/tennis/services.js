angular.module('tennis')
.service('TennisService', function(SHOT_TYPES, SHOT_POSITIONS, TARGET_ZONES) {
  var getShotPosition = function() {
    var shotPositionSize = Object.keys(SHOT_POSITIONS).length;
    return SHOT_POSITIONS[Object.keys(SHOT_POSITIONS)[Math.floor(Math.random() * shotPositionSize)]];
  };

  var getShotType = function (shotposition) {
    var shotTypeSize = Object.keys(SHOT_TYPES).length;
    var randomShotType;
    while (true) {
      randomShotType = SHOT_TYPES[Object.keys(SHOT_TYPES)[Math.floor(Math.random() * shotTypeSize)]];
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
  };

  var getTargetZone = function (shottype) {
    //Hard-coded count of serve shot target zones
    var serveZoneSize = 8;
    var targetZoneSize = Object.keys(TARGET_ZONES).length;
    if (shottype == SHOT_TYPES.serve) {
      return TARGET_ZONES[Object.keys(TARGET_ZONES)[Math.floor(Math.random() * serveZoneSize) + 1]];
    } else {
      return TARGET_ZONES[Object.keys(TARGET_ZONES)[Math.floor(Math.random() * (targetZoneSize - 1)) + 1]];
    }
  };

  var getShotOrder = function() {
    var shotPosition = getShotPosition();
    var shotType = getShotType(shotPosition);
    var targetZone = getTargetZone(shotType);
    return {
      shotposition: shotPosition,
      shottype: shotType,
      targetzone: targetZone
    }
  };

  var setHitMap_Y2G = function (zoneStats) {
    for (var i = 0; i < zoneStats.length; i++) {
      document.getElementById(i.toString()).style.backgroundColor = 'rgb(' + Math.round(255 * (100 - zoneStats[i]) / 100) + ', 255, 0)';
      document.getElementById(i.toString()).style.opacity = '0.7';
    }
  }

  var setHitMap_R2G = function (zoneStats) {
    for (var i = 0; i < zoneStats.length; i++) {
      document.getElementById(i.toString()).style.backgroundColor = 'rgb(' + Math.round(255 * zoneStats[i] / 100) + ', ' + Math.round(255 * (100 - zoneStats[i]) / 100) + ', 0)';
      document.getElementById(i.toString()).style.opacity = '0.7';
    }
  }

  var setHitMap_Teal = function (zoneStats) {
    for (var i = 0; i < zoneStats.length; i++) {
      document.getElementById(i.toString()).style.backgroundColor = 'rgb(' + Math.round(200 * (100 - zoneStats[i]) / 100) + ', 255 , 255)';
      document.getElementById(i.toString()).style.opacity = '0.7';
    }
  }

  var setHitMap_Y2P = function (zoneStats) {
    for (var i = 0; i < zoneStats.length; i++) {
      document.getElementById(i.toString()).style.backgroundColor = 'rgb(255, ' + Math.round(255 * (100 - zoneStats[i]) / 100) + ', ' + Math.round(255 * zoneStats[i] / 100) + ')';
      document.getElementById(i.toString()).style.opacity = '0.7';
    }
  }



  return {
    getShotPosition: getShotPosition,
    getShotType: getShotType,
    getTargetZone: getTargetZone,
    getShotOrder: getShotOrder,
    setHitMap_Y2G: setHitMap_Y2G,
    setHitMap_R2G: setHitMap_R2G,
    setHitMap_Teal: setHitMap_Teal,
    setHitMap_Y2P: setHitMap_Y2P
  };
});
