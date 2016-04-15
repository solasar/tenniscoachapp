angular.module('assessment')
.service('AssessService', function ($http, $ionicPopup, USER_SKILLS) {
  var calcSkillLevel = function (hitCount) {
    if (hitCount > 8 ) {
      return USER_SKILLS.expert;
    } else if (hitCount > 5) {
      return USER_SKILLS.intermediate;
    } else {
      return USER_SKILLS.beginner;
    }
  };
  
  return {
    calcSkillLevel: calcSkillLevel
  };
});
