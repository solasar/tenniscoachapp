angular.module('assessment')
.service('AssessService', function ($http, $ionicPopup, USER_SKILLS, ServerURL) {
  var calcSkillLevel = function (hitCount) {
    if (hitCount >= 14 ) {
      return USER_SKILLS.expert;
    } else if (hitCount >= 10) {
      return USER_SKILLS.intermediate;
    } else {
      return USER_SKILLS.beginner;
    }
  };

  var postAssessmentShots = function (records) {
    console.log("assessment service postshotdata records", records);
    return $http.post(ServerURL + 'dinput', records);
  }

  var postSkillLevelUpdate = function (name, level) {
    console.log('assessment service post skill level update', level);
    var param = {
      username: name,
      level: level
    }
    return $http.post(ServerURL + 'rankUpdate', param);
  }

  return {
    calcSkillLevel: calcSkillLevel,
    postAssessmentShots: postAssessmentShots,
    postSkillLevelUpdate: postSkillLevelUpdate
  };
});
