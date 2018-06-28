import { observable, action } from 'mobx'

import {
  queryUserGroup,
} from 'src/api/methods/userGroup'

class Group {
  @observable groups = null
  @observable error = null

  constructor() {
    this.groups = []
  }

  @action async getGroups({ token }) {
    try {
      let res = await queryUserGroup({ token })
      self.groups = res.data
    } catch (err) {
      self.error = err.message
    }
  }

}

const self = new Group()



export default self