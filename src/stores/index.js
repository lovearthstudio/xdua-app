import authenticationStore from './authentication'
import routingStore from './routing'
import groupStore from './group'
import roleStore from './role'
import singleRoleStore from './role/singleRole'
import vfcodeStore from './vfcode'
import userStore from './user'
import userRoleStore from './userRole'

const stores = {
  authenticationStore,
  routingStore,
  groupStore,
  roleStore,
  singleRoleStore,
  vfcodeStore,
  userStore,
  userRoleStore,
}

export default stores