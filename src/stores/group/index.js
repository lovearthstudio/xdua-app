import { observable, action } from 'mobx'

import {
  queryUserGroup,
  createUserGroup,
  deleteUserGroup,
  editUserGroup,
  getUserGroup,
} from 'src/api/methods/userGroup'
import routing from '../routing'
import { MY_GROUPS, EDIT_GROUP, GROUP_ID } from 'src/data/route'
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
      await createUserGroup({ token, bywho, code, name, avatar, brief })
      redirectToGroupsPage()
    } catch (err) {
      self.error = err.message
    }
  }

  @action async deleteUserGroup({ token, ugrp }) {
    try {
      await deleteUserGroup({ token, ugrp })
      redirectToGroupsPage()
    } catch (err) {
      self.error = err.message
    }
  }

  @action async editUserGroup({ token, ugrp, name, avatar, brief }) {
    try {
      await editUserGroup({ token, ugrp, name, avatar, brief })
      redirectToGroupsPage()
    } catch (err) {
      self.error = err.message
    }
  }

  @action redirectToSettings({ groupId }) {
    let redirectedURI = buildParamURI({
      originalURI: EDIT_GROUP,
      paramName: GROUP_ID,
      substitutedValue: groupId,
    })
    routing.history.push(redirectedURI)
  }

  @action async getUserGroup({ token, ugrp }) {
    self.loading = true
    try {
      const res = await getUserGroup({ token, ugrp })
      self.group = res.data
    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }

}

const self = new Group()



export default self