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
import { getUser, setUpUser } from 'src/api/methods/user'

class Authentication {
  @observable token = null
  @observable userId = null
  @observable error = null
  @observable duaId = null
  @observable profile = null

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
          console.log(self.userId)

          self.duaId = res['dua_id']
          setDuaId(self.duaId)
        } catch (err) {
          self.error = err.message
        }
      })
  }

  @action async getProfile() {
    try {
      let res = await getUser({
        token: self.token,
        duaId: self.duaId,
        user_id: self.userId,
      })
      self.profile = res.data
    } catch (err) {
      self.error = err.message
    }
  }

  @action logOut() {
    self.token = null
    self.userId = null
    self.duaId = null
    setUserToken(null)
    setDuaId(null)
    setUserId(null)
  }

  @action async setUpUser(new_detail) {
    try {
      const new_user = Object.assign(self.profile, new_detail, { user_id: self.user_id })
      let res = await setUpUser(new_user)
      self.profile = res.data
    } catch (err) {
      self.error = err.message
    }
  }

}

const self = new Authentication()



export default self