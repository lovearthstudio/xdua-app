import { observable, action } from 'mobx'
import _ from 'lodash'

import {
  getRole,
  editRole,
  createRole,
} from 'src/api/methods/role'
import { USER_GROUP_ID, ROLE_LIST } from "src/data/route";
import { buildParamURI } from "src/util";

import authenticationStore from '../authentication'
import { getUserGroup } from "src/api/methods/userGroup";

const initialRole = {
  role: '',
  granter: '',
  name: '',
  code: '',
  avatar: '',
  brief: '',
}

class SingleRole {
  @observable role = initialRole
  @observable loading = false

  @observable error = null
  constructor() {
  }


  @action buildRoleListURI({ userGroupId }) {
    return buildParamURI({
      originalURI: ROLE_LIST,
      paramName: USER_GROUP_ID,
      substitutedValue: userGroupId,
    })
  }

  @action initializeRole() {
    self.role = initialRole
  }

  @action async createRole(userGroupId) {
    try {
      self.loading = true
      self.error = null
      const { token, duaId } = authenticationStore

      let res = await getUserGroup({ token, duaId, userGroupId })
      let userGroup = res.data
      const ugrp = userGroup.code

      const { code, name, granter, avatar, brief } = self.role
      await createRole({
        token,
        duaId,
        ugrp,
        granter,
        code,
        name,
        avatar,
        brief,
      })
    } catch (err) {
      self.error = err.message
    }
    self.loading = false

  }

  @action async editRole() {
    try {
      self.loading = true
      self.error = null
      const { id, name, avatar, brief, enabled } = self.role
      const { token, duaId } = authenticationStore
      await editRole({
        token,
        duaId,
        roleId: id,
        name,
        avatar,
        brief,
        enabled,
      })
    } catch (err) {
      self.error = err.message
    }
    self.loading = false

  }

  @action async getRole({ roleId }) {
    try {
      self.loading = true
      self.error = null
      const { token, duaId } = authenticationStore
      // todo: should be query the single role
      let res = await getRole({ token, duaId, roleId })
      self.role = res.data

    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }

}

const self = new SingleRole()



export default self