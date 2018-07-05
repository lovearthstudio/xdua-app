import { observable, action } from 'mobx'

import { CREATE_USER_ROLE, EDIT_ROLE, ROLE_ID, USER_GROUP_ID} from 'src/data/route'
import { buildParamURI } from 'src/util'

import authenticationStore from '../authentication'
import { getUserGroup } from 'src/api/methods/userGroup'
import { queryUserRole, createUserRole } from 'src/api/methods/userRole'

const initialUserRole = {
  uid: '',
  role: '',
  byuid: '',
  note: '',
  expire: '',
  enabled: '',
}

class UserRole {
  @observable userRoles = []
  @observable userRole = initialUserRole

  @observable loading = false

  @observable error = null

  @action buildCreateUserRoleURI({ userGroupId }) {
    return buildParamURI({
      originalURI: CREATE_USER_ROLE,
      paramName: USER_GROUP_ID,
      substitutedValue: userGroupId,
    })
  }

  // @action buildEditRoleURI({ roleId, userGroupId }) {
  //   let roleURI = buildParamURI({
  //     originalURI: EDIT_ROLE,
  //     paramName: ROLE_ID,
  //     substitutedValue: roleId,
  //   })
  //   return buildParamURI({
  //     originalURI: roleURI,
  //     paramName: USER_GROUP_ID,
  //     substitutedValue: userGroupId,
  //   })
  // }

  @action async createUserRole(userGroupId) {
    try {
      self.loading = true
      self.error = null
      const { token, duaId } = authenticationStore

      let res = await getUserGroup({ token, duaId, userGroupId })
      let userGroup = res.data
      const ugrp = userGroup.code

      const { role, uid, byuid } = self.role
      await createUserRole({
        token,
        duaId,
        ugrp,
        role,
        toWho: uid,
      })
    } catch (err) {
      self.error = err.message
    }
    self.loading = false

  }

  @action async getUserRoles(userGroupId) {
    try {
      self.loading = true
      self.error = null
      const { token, duaId } = authenticationStore
      let res = await getUserGroup({ token, duaId, userGroupId })
      let userGroup = res.data
      res = await queryUserRole({ token, duaId, ugrp: userGroup.code })
      console.log(res.data)
      self.userRoles = res.data
    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }
}

const self = new UserRole()



export default self