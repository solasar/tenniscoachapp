angular.module('tennis')
.service('TennisService', function(SHOT_TYPES, SHOT_POSITIONS, TARGET_ZONES, LEFT_SECTION, CENTER_SECTION, RIGHT_SECTION, ASSESSMENT_SHOT_TYPES, USER_SKILLS) {
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

  var getAssessmentShotOrder = function (count) {
    var shotType, targetZone, playerPosition;
    if (Math.floor(count / 3) < Object.keys(ASSESSMENT_SHOT_TYPES).length) {
      shotType = ASSESSMENT_SHOT_TYPES[Object.keys(ASSESSMENT_SHOT_TYPES)[Math.floor(count / 3)]];
    }

    //customized shot order design below
    switch (shotType) {
      case ASSESSMENT_SHOT_TYPES.serveDeuce:
        targetZone = TARGET_ZONES[Object.keys(TARGET_ZONES)[Math.floor(Math.random() * 3) + 5]];
        playerPosition = SHOT_POSITIONS.rightBehindCentreMark.name;
        break;
      case ASSESSMENT_SHOT_TYPES.serveAdvantage:
        targetZone = TARGET_ZONES[Object.keys(TARGET_ZONES)[Math.floor(Math.random() * 3) + 2]];
        playerPosition = SHOT_POSITIONS.leftBehindCentreMark.name;
        break;
      case ASSESSMENT_SHOT_TYPES.forehand:
      case ASSESSMENT_SHOT_TYPES.backhand:
        randomPosition = Math.floor(Math.random() * 3);
        switch (randomPosition) {
          case 0:
            playerPosition = SHOT_POSITIONS.behindLeftBaseline.name;
            break;
          case 1:
            playerPosition = SHOT_POSITIONS.behindCenterBaseline.name;
            break;
          case 2:
            playerPosition = SHOT_POSITIONS.behindRightBaseline.name;
            break;
        }
        targetZone = TARGET_ZONES[Object.keys(TARGET_ZONES)[Math.floor(Math.random() * 16) + 9]];
        break;
      case ASSESSMENT_SHOT_TYPES.forehandVolley:
      case ASSESSMENT_SHOT_TYPES.backhandVolley:
        randomPosition = Math.floor(Math.random() * 3);
        switch (randomPosition) {
          case 0:
            playerPosition = SHOT_POSITIONS.frontLeftServiceline.name;
            break;
          case 1:
            playerPosition = SHOT_POSITIONS.frontTServiceline.name;
            break;
          case 2:
            playerPosition = SHOT_POSITIONS.frontRightServiceline.name;
            break;
        }
        targetZone = TARGET_ZONES[Object.keys(TARGET_ZONES)[Math.floor(Math.random() * 24) + 1]];
        break;
      default:
        targetZone = '';
        shotType = '';
        targetZone = '';
    }

    return {
      shotposition: playerPosition,
      shottype: shotType,
      targetzone: targetZone
    }
  }




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

  var getExerciseShotType = function (section, userLevel) {
    var poolType;
    if (userLevel == USER_SKILLS.beginner) {
      poolType = 'EasyShotPool';
      userLevel = 1;
    } else {
      poolType = 'HardShotPool';
      userLevel = 2;
    }
    var shotPool = [];
    if (window.localStorage.getItem(poolType) === null) {
      for (var i = 0; i < Object.keys(SHOT_TYPES).length; i++) {
        if (SHOT_TYPES[Object.keys(SHOT_TYPES)[i]].difficulty <= userLevel) {
          shotPool.push(SHOT_TYPES[Object.keys(SHOT_TYPES)[i]]);
        }
      }
      window.localStorage.setItem(poolType, JSON.stringify(shotPool));
    } else {
      shotPool = JSON.parse(window.localStorage.getItem(poolType));
    }
    var randomShotType;
    do {
      randomShotType = shotPool[Math.floor(Math.random() * shotPool.length)];
    } while ((section == LEFT_SECTION && randomShotType.name == SHOT_TYPES.serveDeuce.name) ||
            (section == RIGHT_SECTION && randomShotType.name == SHOT_TYPES.serveAdvantage.name))
    console.log('Random shot type in exercise module is: ', randomShotType);
    return randomShotType;
  };

  var getExerciseShotPosition = function(shotType) {
    var positionPool = [];
    if (window.localStorage.getItem(shotType.from) === null) {
      for (var i = 0; i < Object.keys(SHOT_POSITIONS).length; i++) {
        if (SHOT_POSITIONS[Object.keys(SHOT_POSITIONS)[i]].area == shotType.from) {
          positionPool.push(SHOT_POSITIONS[Object.keys(SHOT_POSITIONS)[i]]);
        }
      }
      window.localStorage.setItem(shotType.from, JSON.stringify(positionPool));
    } else {
      positionPool = JSON.parse(window.localStorage.getItem(shotType.from));
    }
    var randomShotPosition = positionPool[Math.floor(Math.random() * positionPool.length)];
    console.log('Random shot position in exercise module is: ', randomShotPosition);
    return randomShotPosition;
  };

  /*
    This function is full of hard coded stuffs for easier coding.
   */
  var getExerciseTargetZone = function (shotType, section) {
    var zonePool = [];

    //Hard-coded switch with cases for every available shots.
    switch (shotType.name) {
      case SHOT_TYPES.serveAdvantage.name:
            zonePool = [2, [3, 4], 0];
            break;
      case SHOT_TYPES.serveDeuce.name:
            zonePool = [0, [5, 6], 7];
            break;
      case SHOT_TYPES.backhand.name:
            zonePool = [[10, 18], [12, 13, 20, 21], [15, 23]];
            break;
      case SHOT_TYPES.forehand.name:
            zonePool = [[10, 18], [12, 13, 20, 21], [15, 23]];
            break;
      case SHOT_TYPES.backhandVolley.name:
            zonePool = [[2, 10, 18], [4, 5, 12, 13, 20, 21], [7, 15, 23]];
            break;
      case SHOT_TYPES.forehandVolley.name:
            zonePool = [[2, 10, 18], [4, 5, 12, 13, 20, 21], [7, 15, 23]];
            break;
      case SHOT_TYPES.backhandApproach.name:
            zonePool = [[10, 18], [12, 13, 20, 21], [15, 23]];
            break;
      case SHOT_TYPES.forehandApproach.name:
            zonePool = [[10, 18], [12, 13, 20, 21], [15, 23]];
            break;
      case SHOT_TYPES.backhandLob.name:
            zonePool = [18, [20, 21], 23];
            break;
      case SHOT_TYPES.forehandLob.name:
            zonePool = [18, [20, 21], 23];
            break;
      case SHOT_TYPES.backhandDrop.name:
            zonePool = [2, [4, 5], 7];
            break;
      case SHOT_TYPES.forehandDrop.name:
            zonePool = [2, [4, 5], 7];
            break;
      case SHOT_TYPES.overhead.name:
            zonePool = [[2, 10, 18], [4, 5, 12, 13, 20, 21], [7, 15, 23]];
            break;
      default:
            console.log('DEFAULT:', shotType);
            zonePool = [0, 0, 0];
            break;
    }

    var targetZonePool;
    switch (section) {
      case LEFT_SECTION:
            targetZonePool = zonePool[0];
            break;
      case CENTER_SECTION:
            targetZonePool = zonePool[1];
            break;
      case RIGHT_SECTION:
            targetZonePool = zonePool[2];
            break;
      default:
            console.log('The target zone section parameter has wrong or no value.', section);
            break;
    }

    var randomTargetZone;
    if (targetZonePool.constructor === Array) {
      randomTargetZone = targetZonePool[Math.floor(Math.random() * targetZonePool.length)];
    } else {
      randomTargetZone = targetZonePool;
    }

    console.log('Random target zone for exercise module shot is: ', randomTargetZone);
    return randomTargetZone;
  }


  var getExerciseShotOrder = function (section, userLevel) {
    var shotType = getExerciseShotType(section, userLevel);
    var shotPosition = getExerciseShotPosition(shotType);
    var targetZone = getExerciseTargetZone(shotType, section);
    /*
    var shotPosition = getShotPosition();
    var shotType = getShotType(shotPosition);
    var targetZone = getTargetZoneBySection(shotType, section);
    */
    return {
      shotposition: shotPosition.name,
      shottype: shotType.name,
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
    getAssessmentShotOrder: getAssessmentShotOrder,
    tintTargetZone: tintTargetZone,
    unTintTargetZone: unTintTargetZone,
    getTargetZoneBySection: getTargetZoneBySection,
    getExerciseShotOrder: getExerciseShotOrder,
    tintTargetZones: tintTargetZones,
    setHitMap_Y2G: setHitMap_Y2G,
    setHitMap_R2G: setHitMap_R2G,
    setHitMap_Teal: setHitMap_Teal,
    setHitMap_Y2P: setHitMap_Y2P,
    setCourtSection: setCourtSection
  };
});
