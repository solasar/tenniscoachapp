angular.module('account')

.constant('STORAGE_KEYS', {
  userInfo: 'User Info',
  userId: 'User ID',
  password: 'Password',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  phoneNumber: 'Phone Number',
  userType: 'User Type',
  userSkill: 'User Skill',
  userRecords: 'User Records'
})

.constant('USER_TYPES', {
  player: 'P',
  coach: 'C',
  both: 'B'
})

.constant('AUTH_EVENTS', {
  notAuthorized: 'auth-not-authorized',
  notAuthenticated: 'auth-not-authenticated'
})

.constant('USER_SKILLS', {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  expert: 'Expert'
})
