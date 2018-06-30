import { observable, action } from 'mobx'

import {
  queryRole,
} from 'src/api/methods/vfcode'

import authenticationStore from '../authentication'

class Vfcode {

  @action async getVfcode() {
    try {
      const { duaId } = authenticationStore
      console.log('duaId', duaId)
      let res = await queryRole({ duaId })

      self.roles = res.data
    } catch (err) {
      self.error = err.message
    }
  }
}

const self = new Vfcode()



export default self