import { observable, action } from 'mobx'
import _ from 'lodash'

import { getDuaIdFromServer } from 'src/api/methods/dua'
import {
  signUp,
  resetPassword,
  getUser,
} from 'src/api/methods/user'
import authenticationStore from '../authentication'

class User {
  @observable error = null
  @observable user = null

  @action resetError() {
    self.error = null
  }

  @action signUpByPhone({ username, password, vfcode }) {
    getDuaIdFromServer().then(
      async function(duaRes) {
        try {
          const duaId = duaRes['id']
          await signUp({ username, password, duaId, vfcode, byPhone:true })
          authenticationStore.login({ username, password })
        } catch (err) {
          self.error = err.message
        }
      })
  }

  @action resetPasswordByPhone({ username, password, vfcode }) {
    getDuaIdFromServer().then(
      async function(duaRes) {
        try {
          const duaId = duaRes['id']
          resetPassword({ username, password, duaId, vfcode, byPhone:true })
          authenticationStore.login({ username, password })
        } catch (err) {
          self.error = err.message
        }
      })
  }

  @action async getUserDetail({ user_id }) {
    const { token, duaId } = authenticationStore
    try {
      let res = await getUser({ token, duaId, user_id })
      self.user = res.data
    } catch (err) {
      self.error = err.message
    }
  }

}

const self = new User()



export default self