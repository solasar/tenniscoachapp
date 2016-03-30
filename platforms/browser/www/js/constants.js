angular.module('Constants', [])
.constant('STORAGE_KEYS', {
  userName: 'username',
  hashPassword: 'password'
})

.constant('USER_TYPE', {
  player: 'player',
  coach: 'coach'
})

.constant('AUTH_EVENTS', {
  notAuthorized: 'auth-not-authorized',
  notAuthenticated: 'auth-not-authenticated'
})
