import { observable, action } from 'mobx'
import _ from 'lodash'

import {
  getUserToken,
  setUserToken,
  setDuaId,
  getDuaId,
  setUserId,
  getUserId,
} from 'src/util/cookies'
import {
  login,
} from 'src/api/methods/login'
import { getDuaIdFromServer } from 'src/api/methods/dua'

class User {
  @observable token = null
  @observable userId = null
  @observable error = null
  @observable duaId = null

  constructor() {
    this.token = getUserToken()
    this.duaId = getDuaId()
    this.userId = getUserId()
  }
  @action async login({ username, password }) {
    getDuaIdFromServer().then(
      async function(duaRes) {
        try {
          const duaId = duaRes['id']
          const res = await login({ username, password, duaId})
          self.token = res.token
          setUserToken(self.token)

          self.userId = res['user_id']
          setUserId(self.userId)

          self.duaId = res['dua_id']
          setDuaId(self.duaId)
        } catch (err) {
          self.error = err.message
        }
      })
  }

  @action logOut() {
    self.token = null
    self.userId = null
    self.duaId = null
    setUserToken(null)
    setDuaId(null)
    setUserId(null)
  }

}

const self = new User()



export default self