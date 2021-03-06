export const ROOT = '/'

export const PUBLIC = '/public'
export const LOGIN = PUBLIC + '/login'
export const SIGN_UP = PUBLIC + '/signUp'
export const RESET_PASSWORD = PUBLIC + '/resetPassword'

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
export const ROLE_LIST = GROUP_DETAIL + ROLE
export const EDIT_ROLE = ROLE_LIST + '/edit/' + ROLE_ID
export const CREATE_ROLE = ROLE_LIST + '/create'

// UserRole
export const USER_ROLE = '/userRoles'
export const USER_ROLE_ID = ':userRoleId'
export const USER_ROLE_LIST = GROUP_DETAIL + USER_ROLE
export const EDIT_USER_ROLE = USER_ROLE_LIST + '/edit/' + USER_ROLE_ID
export const CREATE_USER_ROLE = USER_ROLE_LIST + '/create'