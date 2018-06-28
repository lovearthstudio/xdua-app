import { observable, action } from 'mobx'
import _ from 'lodash'

import { getUserToken, setUserToken } from 'src/util/cookies'

class User {
  @observable userToken = null
  @observable error = null

  constructor() {
    this.userToken = getUserToken()
  }

  @action async login({ username, password }) {
    self.userToken = username
    setUserToken(self.userToken)
  }

  @action logOut() {
    self.userToken = null
    setUserToken(null)
  }

}

const self = new User()



export default self