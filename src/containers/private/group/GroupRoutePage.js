import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  CREATE_GROUP,
  EDIT_GROUP,
} from 'src/data/route'

import FallbackPage  from 'src/containers/FallbackPage'
import MyGroupPage from './MyGroupPage'
import CreateGroupPage from './CreateGroupPage'
import EditGroupPage from './EditGroupPage'

class PrivateRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Switch>
          <Route exact path={CREATE_GROUP} component={CreateGroupPage} />
          <Route exact path={EDIT_GROUP} component={EditGroupPage} />
          <Route path={'*'} component={MyGroupPage}/>
          <Route component={FallbackPage}/>
        </Switch>
      </div>
    )
  }
}

export default PrivateRoutePage