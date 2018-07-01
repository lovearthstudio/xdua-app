import { observable, action } from 'mobx'

import {
  queryRole,
} from 'src/api/methods/role'
import {EDIT_ROLE, ROLE_ID, USER_GROUP_ID} from 'src/data/route'
import { buildParamURI } from 'src/util'

import authenticationStore from '../authentication'
import { getUserGroup } from 'src/api/methods/userGroup'

class Role {
  @observable roles = []

  @observable loading = false

  @observable error = null

  @action buildEditRoleURI({ roleId, userGroupId }) {
    let roleURI = buildParamURI({
      originalURI: EDIT_ROLE,
      paramName: ROLE_ID,
      substitutedValue: roleId,
    })
    return buildParamURI({
      originalURI: roleURI,
      paramName: USER_GROUP_ID,
      substitutedValue: userGroupId,
    })
  }

  @action async getRoles(userGroupId) {
    try {
      self.loading = true
      self.error = null
      const { token, duaId } = authenticationStore
      let res = await getUserGroup({ token, duaId, userGroupId })
      let userGroup = res.data
      res = await queryRole({ token, duaId, ugrp: userGroup.code })

      self.roles = res.data
    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }
}

const self = new Role()



export default self