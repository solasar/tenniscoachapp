angular.module('tennis')
.service('TennisService', function(SHOT_TYPES, SHOT_POSITIONS, TARGET_ZONES, LEFT_SECTION, CENTER_SECTION, RIGHT_SECTION) {
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

  var tintTargetZone = function (zone) {
    console.log('highlighttargetzone', zone);
    document.getElementById(zone.toString()).style.backgroundColor = 'green';
    document.getElementById(zone.toString()).style.opacity = '0.7';
  };

  var unTintTargetZone = function (zone) {
    document.getElementById(zone.toString()).style.backgroundColor = 'transparent';
  }
  
  var getTargetZoneBySection = function (shottype, section) {
    if (shottype == SHOT_TYPES.serve) {
      var servezone = Object.keys(section).filter(function (key) {
        //Assuming that zone 1~8 are serve zones
        return key <= 8 && key != 0;
      });
      console.log('IN SERVE, Zones are here.', servezone);
      var serveZoneSize = servezone.length;
      return Object.keys(servezone)[Math.floor(Math.random() * (serveZoneSize - 1)) + 1];
    } else {

      var targetZoneSize = Object.keys(section).length;
      return Object.keys(section)[Math.floor(Math.random() * (targetZoneSize - 1)) + 1];
    }
  };

  var getShotOrderBySection = function (section) {
    var shotPosition = getShotPosition();
    var shotType = getShotType(shotPosition);
    var targetZone = getTargetZoneBySection(shotType, section);
    return {
      shotposition: shotPosition,
      shottype: shotType,
      targetzone: targetZone
    }
  };
  
  var tintTargetZones = function (mainZone, acceptZones) {
    acceptZones.forEach(function (acceptZone) {
      document.getElementById(acceptZone.toString()).style.backgroundColor = 'green';
      document.getElementById(acceptZone.toString()).style.opacity = '0.3';
    })
    document.getElementById(mainZone.toString()).style.backgroundColor = 'green';
    document.getElementById(mainZone.toString()).style.opacity = '0.7';
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

  var setCourtSection = function () {
    Object.keys(LEFT_SECTION).forEach(function (entry) {
      console.log('ENTRY', entry);
      document.getElementById(entry.toString()).style.backgroundColor = 'pink';
      document.getElementById(entry.toString()).style.opacity = '0.7';
    });
    Object.keys(CENTER_SECTION).forEach(function (entry) {
      console.log('ENTRY', entry);
      document.getElementById(entry.toString()).style.backgroundColor = 'yellow';
      document.getElementById(entry.toString()).style.opacity = '0.7';
    });
    Object.keys(RIGHT_SECTION).forEach(function (entry) {
      console.log('ENTRY', entry);
      document.getElementById(entry.toString()).style.backgroundColor = 'orange';
      document.getElementById(entry.toString()).style.opacity = '0.7';
    });
  }



  return {
    getShotPosition: getShotPosition,
    getShotType: getShotType,
    getTargetZone: getTargetZone,
    getShotOrder: getShotOrder,
    tintTargetZone: tintTargetZone,
    unTintTargetZone: unTintTargetZone,
    getTargetZoneBySection: getTargetZoneBySection,
    getShotOrderBySection: getShotOrderBySection,
    tintTargetZones: tintTargetZones,
    setHitMap_Y2G: setHitMap_Y2G,
    setHitMap_R2G: setHitMap_R2G,
    setHitMap_Teal: setHitMap_Teal,
    setHitMap_Y2P: setHitMap_Y2P,
    setCourtSection: setCourtSection
  };
});
