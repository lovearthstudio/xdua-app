import { observable, action } from 'mobx'

import {
  getVfcodeByPhone,
} from 'src/api/methods/vfcode'
import { getDuaIdFromServer } from 'src/api/methods/dua'

class Vfcode {

  @observable error = null

  @action resetError() {
    self.error = null
  }

  @action
  async getVfcodeByPhone({username}) {

    getDuaIdFromServer().then(
      async function (duaRes) {
        try {
          const duaId = duaRes['id']
          await getVfcodeByPhone({username, duaId})
        }
        catch (err) {
          console.log(err)
          self.error = err.message
        }
      })
  }
}

const self = new Vfcode()



export default self