import { observable, action } from 'mobx'
import _ from 'lodash'

import { getUserToken, setUserToken } from 'src/util/cookies'
import {
  login,
} from 'src/api/methods/login'
import { initializeDuaId } from 'src/api/methods/dua'

class User {
  @observable userToken = null
  @observable userId = null
  @observable error = null

  constructor() {
    this.userToken = getUserToken()
  }

  @action async login({ username, password }) {
    initializeDuaId().then(
      async function() {
        try {
          let res = await login({ username, password })
          console.log(res)
          self.userToken = res.token
          self.userId = res.user_id
        } catch (err) {
          self.error = err.message
        }})
  }

  @action logOut() {
    self.userToken = null
    self.userId = null
    setUserToken(null)
  }

}

const self = new User()



export default self