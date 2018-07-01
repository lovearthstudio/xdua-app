import { observable, action } from 'mobx'

import {
  getVfcodeByPhone,
} from 'src/api/methods/vfcode'

class Vfcode {

  @observable error = null

  @action resetError() {
    self.error = null
  }

  @action async getVfcodeByPhone({ username }) {
    try {
      await getVfcodeByPhone({username })
    } catch (err) {
      console.log(err)
      self.error = err.message
    }
  }
}

const self = new Vfcode()



export default self