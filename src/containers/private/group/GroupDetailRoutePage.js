import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  ROLE_LIST,
  GROUP_DETAIL,
} from 'src/data/route'

import FallbackPage  from 'src/containers/FallbackPage'
import RoleListPage from './role/RoleListPage'
import GroupDetailPage from './GroupDetailPage'

class RoleRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Switch>
          <Route path={ROLE_LIST} component={RoleListPage}/>
          <Route path={GROUP_DETAIL} component={GroupDetailPage} />
          <Route component={FallbackPage}/>
        </Switch>
      </div>
    )
  }
}

export default RoleRoutePage