import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  USER_ROLE_LIST,
  // EDIT_USEER_ROLE,
  CREATE_USER_ROLE,
} from 'src/data/route'

import FallbackPage  from 'src/containers/FallbackPage'
import UserRoleListPage from './UserRoleListPage'
// import EditRolePage from './EditRolePage'
import CreateRolePage from './CreateUserRolePage'

class UserRoleRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path={CREATE_USER_ROLE} component={CreateRolePage} />
          <Route exact path={USER_ROLE_LIST} component={UserRoleListPage} />
          <Route component={FallbackPage}/>
        </Switch>
      </div>
    )
  }
}

export default UserRoleRoutePage