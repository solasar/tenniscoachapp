angular.module('tennis')
  /*
    Player positions for shots are divided into 3 regions: front, back, and serve.
    front - area in front of the service line. (volley or overhead shot position)
    back - area behind the baseline. (regular, approach, lob, or drop shot position)
    centre(Left/Right) - area around the centre mark. (serve shot position)
   */

.constant('SHOT_TYPES',{
  serveAdvantage: {
    name: 'Serve Advantage',
    difficulty: 1,
    from: 'centreLeft'
  },
  serveDeuce: {
    name: 'Serve Deuce',
    difficulty: 1,
    from: 'centreRight'
  },
  backhand: {
    name: 'Backhand',
    difficulty: 1,
    from: 'back'
  },
  forehand: {
    name: 'Forehand',
    difficulty: 1,
    from: 'back'
  },
  backhandVolley: {
    name: 'Backhand Volley',
    difficulty: 1,
    from: 'front'
  },
  forehandVolley: {
    name: 'Forehand Volley',
    difficulty: 1,
    from: 'front'
  },
  backhandApproach: {
    name: 'Backhand Approach',
    difficulty: 2,
    from: 'back'
  },
  forehandApproach: {
    name: 'Forehand Approach',
    difficulty: 2,
    from: 'back'
  },
  backhandLob: {
    name: 'Backhand Lob',
    difficulty: 2,
    from: 'back'
  },
  forehandLob: {
    name: 'Forehand Lob',
    difficulty: 2,
    from: 'back'
  },
  backhandDrop: {
    name: 'Backhand Drop',
    difficulty: 2,
    from: 'back'
  },
  forehandDrop: {
    name: 'Forehand Drop',
    difficulty: 2,
    from: 'back'
  },
  overhead: {
    name: 'Overhead',
    difficulty: 2,
    from: 'front'
  }
})

.constant('SHOT_TYPESS', {
  serve: 'Serve',
  serveAdvantage: 'Serve Advantage',
  serveDeuce: 'Serve Deuce',

  backhand: 'Backhand',
  backhandApproach: 'Backhand Approach',
  backhandDrop: 'Backhand Drop',
  backhandLob: 'Backhand Lob',
  backhandVolley: 'Backhand Volley',

  forehand: 'Forehand',
  forehandApproach: 'Forehand Approach',
  forehandDrop: 'Forehand Drop',
  forehandLob: 'Forehand Lob',
  forehandVolley: 'Forehand Volley'
})

.constant('ASSESSMENT_SHOT_TYPES', {
  serveDeuce: 'Serve Deuce',
  serveAdvantage: 'Serve Advantage',
  backhand: 'Backhand',
  forehand: 'Forehand',
  backhandVolley: 'Backhand Volley',
  forehandVolley: 'Forehand Volley'
})



.constant('SHOT_POSITIONS', {
  behindLeftBaseline: {
    name: 'Behind Left Baseline',
    area: 'back'
  },
  behindCenterBaseline: {
    name: 'Behind Center Baseline',
    area: 'back'
  },
  behindRightBaseline: {
    name: 'Behind Right Baseline',
    area: 'back'
  },
  frontLeftServiceline: {
    name: 'Front of Left Serviceline',
    area: 'front'
  },
  frontTServiceline: {
    name: 'Front of "T" Serviceline',
    area: 'front'
  },
  frontRightServiceline: {
    name: 'Front of Right Serviceline',
    area: 'front'
  },
  leftBehindCentreMark: {
    name: 'Left & Behind Centre Mark',
    area: 'centreLeft'
  },
  rightBehindCentreMark: {
    name: 'Right & Behind Centre Mark',
    area: 'centreRight'
  }
})

.constant('SHOT_POSITIONSS', {
  behindLeftBaseline: 'Behind Left Baseline',
  behindCenterBaseline: 'Behind Center Baseline',
  behindRightBaseline: 'Behind Right Baseline',
  frontLeftServiceline: 'Front of Left Serviceline',
  frontTServiceline: 'Front of "T" Serviceline',
  frontRightServiceline: 'Front of Right Serviceline',
  leftBehindCentreMark: 'Left & Behind Centre Mark',
  rightBehindCentreMark: 'Right & Behind Centre Mark'
})

.constant('TARGET_ZONES', {
  //T: Top, M: Mid, B: Bot, L: Left, R: Right
  out: 0,
  TLLL: 1,
  TLLR: 2,
  TLRL: 3,
  TLRR: 4,
  TRLL: 5,
  TRLR: 6,
  TRRL: 7,
  TRRR: 8,
  MLLL: 9,
  MLLR: 10,
  MLRL: 11,
  MLRR: 12,
  MRLL: 13,
  MRLR: 14,
  MRRL: 15,
  MRRR: 16,
  BLLL: 17,
  BLLR: 18,
  BLRL: 19,
  BLRR: 20,
  BRLL: 21,
  BRLR: 22,
  BRRL: 23,
  BRRR: 24
});

