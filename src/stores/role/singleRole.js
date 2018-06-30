import { observable, action } from 'mobx'
import _ from 'lodash'

import {
  queryRole,
} from 'src/api/methods/role'
import userStore from '../user'

class SingleRole {
  @observable role = null
  @observable loading = false

  @observable error = null
  constructor() {
  }

  @action async getRole({ roleId }) {
    try {
      self.loading = true
      self.error = null
      const { token, duaId } = userStore
      // todo: should be query the single role
      let res = await queryRole({ token, duaId })
      _.forEach(res.data, (role) => {
        if (role.id === roleId) {
          self.role = role
        }
      })

    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }

}

const self = new SingleRole()



export default self