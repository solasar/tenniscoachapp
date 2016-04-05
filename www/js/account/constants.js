angular.module('account')
.constant('STORAGE_KEYS', {
  userInfo: 'UserInfo',
  userId: 'UserID',
  password: 'Password',
  firstName: 'FirstName',
  lastName: 'LastName',
  email: 'Email',
  phoneNumber: 'PhoneNumber',
  userType: 'UserType'
})

.constant('USER_TYPE', {
  player: 'Player',
  coach: 'Coach'
})

.constant('AUTH_EVENTS', {
  notAuthorized: 'auth-not-authorized',
  notAuthenticated: 'auth-not-authenticated'
})
