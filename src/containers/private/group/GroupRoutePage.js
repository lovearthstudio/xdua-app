import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  CREATE_GROUP,
  EDIT_GROUP,
  MY_GROUPS,
  GROUP_DETAIL,
  ROLE_LIST,
  USER_ROLE_LIST,
} from 'src/data/route'

import FallbackPage  from 'src/containers/FallbackPage'
import MyGroupPage from './MyGroupPage'
import CreateGroupPage from './CreateGroupPage'
import EditGroupPage from './EditGroupPage'
import GroupDetailPage from './GroupDetailPage'
import RoleRoutePage from './role/RoleRoutePage'
import UserRoleRoutePage from './userRole/UserRoleRoutePage'

class GroupRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Switch>
          <Route exact path={CREATE_GROUP} component={CreateGroupPage} />
          <Route exact path={EDIT_GROUP} component={EditGroupPage} />
          <Route exact path={GROUP_DETAIL} component={GroupDetailPage} />
          <Route path={USER_ROLE_LIST} component={UserRoleRoutePage}/>
          <Route path={ROLE_LIST} component={RoleRoutePage}/>
          <Route path={MY_GROUPS} component={MyGroupPage}/>
          <Route component={FallbackPage}/>
        </Switch>
      </div>
    )
  }
}

export default GroupRoutePage