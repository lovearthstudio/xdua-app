export const ROOT = '/'

export const PUBLIC = '/public'
export const LOGIN = PUBLIC + '/login'
export const SIGN_UP = PUBLIC + '/signUp'

export const PRIVATE = '/private'

export const PROFILE = PRIVATE + '/profile'
export const MY_APPS = PRIVATE + '/myApps'
export const MY_GROUPS = PRIVATE + '/myGroups'

export const CREATE_GROUP = MY_GROUPS + '/create'

export const USER_GROUP_ID = ':userGroupId'
export const EDIT_GROUP = MY_GROUPS + '/edit/' + USER_GROUP_ID

export const GROUP_DETAIL = MY_GROUPS + '/group/' + USER_GROUP_ID + '/detail'

// ROLE
export const ROLE = '/roles'
export const ROLE_ID = ':roleId'
export const ROLE_LIST = PRIVATE + ROLE
export const EDIT_ROLE = ROLE_LIST + '/edit/' + ROLE_ID

