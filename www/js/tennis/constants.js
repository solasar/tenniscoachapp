angular.module('tennis')

.constant('SHOT_TYPES', {
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
  behindLeftBaseline: 'Behind Left Baseline',
  behindCenterBaseline: 'Behind Center Baseline',
  behindRightBaseline: 'Behind Right Baseline',
  insideLeftServiceline: 'Inside Left Serviceline',
  insideTServiceline: 'Inside "T" Serviceline',
  insideRightServiceline: 'Inside Right Serviceline',
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

