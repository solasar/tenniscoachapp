angular.module('account')
.constant('STORAGE_KEYS', {
  userInfo: 'User Info',
  userId: 'User ID',
  password: 'Password',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  phoneNumber: 'Phone Number',
  userType: 'User Type'
})

.constant('USER_TYPE', {
  player: 'Player',
  coach: 'Coach'
})

.constant('AUTH_EVENTS', {
  notAuthorized: 'auth-not-authorized',
  notAuthenticated: 'auth-not-authenticated'
})
