import { observable, action } from 'mobx'

import {
  queryUserGroup,
  createUserGroup,
  deleteUserGroup,
  editUserGroup,
  getUserGroup,
} from 'src/api/methods/userGroup'
import routing from '../routing'
import { MY_GROUPS, EDIT_GROUP, USER_GROUP_ID } from 'src/data/route'
import { buildParamURI } from 'src/util'

const redirectToGroupsPage = function() {
  routing.history.push(MY_GROUPS)
}


class Group {
  @observable groups = []
  @observable group = {
    name: '',
    code: '',
    brief: '',
  }
  @observable loading = null
  @observable error = null

  @action async getGroups({ token }) {
    try {
      let res = await queryUserGroup({ token })
      self.groups = res.data
    } catch (err) {
      self.error = err.message
    }
  }

  @action async createUserGroup({ token, bywho, code, name, avatar, brief }) {
    try {
      debugger
      await createUserGroup({ token, bywho, code, name, avatar, brief })
      redirectToGroupsPage()
    } catch (err) {
      self.error = err.message
    }
  }

  @action async deleteUserGroup({ token, userGroupId }) {
    try {
      await deleteUserGroup({ token, userGroupId })
      self.getGroups(token)
    } catch (err) {
      self.error = err.message
    }
  }

  @action async editUserGroup({ token, userGroupId, name, avatar, brief }) {
    try {
      await editUserGroup({ token, userGroupId, name, avatar, brief })
      redirectToGroupsPage()
    } catch (err) {
      self.error = err.message
    }
  }

  @action redirectToSettings({ userGroupId }) {
    let redirectedURI = buildParamURI({
      originalURI: EDIT_GROUP,
      paramName: USER_GROUP_ID,
      substitutedValue: userGroupId,
    })
    routing.history.push(redirectedURI)
  }

  @action async getUserGroup({ token, userGroupId }) {
    self.loading = true
    try {
      const res = await getUserGroup({ token, userGroupId })
      self.group = res.data
    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }

}

const self = new Group()



export default self