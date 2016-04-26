angular.module('tennis')

.constant('SHOT_TYPES', {
  serve: 'Serve',
  backhand: 'Backhand',
  forehand: 'Forehand',
  volley: 'Volley'
})

.constant('SHOT_POSITIONS', {
  behindLeftBaseline: 'Behind Left Baseline',
  behindCenterBaseline: 'Behind Center Baseline',
  behindRightBaseline: 'Behind Right Baseline',
  leftNoMansLand: 'Left No Mans Land',
  centerNoMansLand: 'Center No Mans Land',
  rightNoMansLand: 'Right No Mans Land',
  leftServiceBox: 'Left Service Box',
  centerServiceBox: 'Center Service Box',
  rightServiceBox: 'Right Service Box'
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

