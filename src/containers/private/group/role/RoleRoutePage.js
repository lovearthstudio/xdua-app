import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  ROLE_LIST,
  EDIT_ROLE,
} from 'src/data/route'

import FallbackPage  from 'src/containers/FallbackPage'
import RoleListPage from './RoleListPage'
import EditRolePage from './EditRolePage'

class RoleRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Switch>
          <Route path={EDIT_ROLE} component={EditRolePage} />
          <Route exact path={ROLE_LIST} component={RoleListPage} />
          <Route component={FallbackPage}/>
        </Switch>
      </div>
    )
  }
}

export default RoleRoutePage