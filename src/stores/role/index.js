import { observable, action } from 'mobx'

import {
  queryRole,
} from 'src/api/methods/role'
import { EDIT_ROLE, ROLE_ID } from 'src/data/route'
import { buildParamURI } from 'src/util'

import userStore from '../user'

class Role {
  @observable roles = []

  @observable error = null

  @action buildEditRoleURI({ roleId }) {
    return buildParamURI({
      originalURI: EDIT_ROLE,
      paramName: ROLE_ID,
      substitutedValue: roleId,
    })
  }

  @action async getRoles() {
    try {
      const { token, duaId } = userStore
      let res = await queryRole({ token, duaId })

      self.roles = res.data
    } catch (err) {
      self.error = err.message
    }
  }
}

const self = new Role()



export default self