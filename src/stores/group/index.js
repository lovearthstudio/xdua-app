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
import userStore from '../user'

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

  @action async getGroups() {
    try {
      const { token, duaId } = userStore
      let res = await queryUserGroup({ token, duaId })
      self.groups = res.data
    } catch (err) {
      self.error = err.message
    }
  }

  @action async createUserGroup({ bywho, code, name, avatar, brief }) {
    try {
      const { token, duaId } = userStore
      await createUserGroup({ token, duaId, bywho, code, name, avatar, brief })
      redirectToGroupsPage()
    } catch (err) {
      self.error = err.message
    }
  }

  @action async deleteUserGroup({ userGroupId }) {
    try {
      const { token, duaId } = userStore
      await deleteUserGroup({ token, duaId, userGroupId })
      self.getGroups(token)
    } catch (err) {
      self.error = err.message
    }
  }

  @action async editUserGroup({ userGroupId, name, avatar, brief }) {
    try {
      const { token, duaId } = userStore

      await editUserGroup({ token, duaId, userGroupId, name, avatar, brief })
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

  @action async getUserGroup({ userGroupId }) {
    self.loading = true
    try {
      const { token, duaId } = userStore

      const res = await getUserGroup({ token, duaId, userGroupId })
      self.group = res.data
    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }

}

const self = new Group()



export default self