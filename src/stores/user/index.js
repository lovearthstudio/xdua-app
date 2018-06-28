import { observable, action } from 'mobx'
import _ from 'lodash'

import { getUserToken, setUserToken } from 'src/util/cookies'
import {
  login,
} from 'src/api/methods/login'

class User {
  @observable userToken = null
  @observable error = null

  constructor() {
    this.userToken = getUserToken()
  }

  @action async login({ username, password }) {
    try {
      // let res = await login({ username, password })
      // console.log(res)
      self.userToken = username
    } catch (err) {
      self.error = err.message
    }
  }

  @action logOut() {
    self.userToken = null
    setUserToken(null)
  }

}

const self = new User()



export default self