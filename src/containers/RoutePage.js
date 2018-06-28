import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  ROOT,
  PUBLIC,
  PRIVATE,
} from 'src/data/route'

import FallbackPage  from './FallbackPage'
import HomePage from './HomePage'
import PublicRoutePage from './public/PublicRoutePage'
import PrivateRoutePage from './private/PrivateRoutePage'

class RoutePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route path={PUBLIC} component={PublicRoutePage} />
        <Route path={PRIVATE} component={PrivateRoutePage} />
        <Route component={FallbackPage}/>
      </Switch>
    )
  }
}

export default RoutePage