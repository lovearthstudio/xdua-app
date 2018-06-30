import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {inject, observer} from 'mobx-react/index'

import {
  LOGIN,
  PRIVATE,
  SIGN_UP,
} from 'src/data/route'

import FallbackPage  from '../FallbackPage'
import LoginPage from './user/LoginPage'
import SignUpPage from './SignUpPage'


@inject(stores => {
  let { userStore } = stores
  let { token } = userStore
  return {
    token,
  }
})
@observer
class PublicRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    token: PropTypes.string,
  }

  render() {
    let { token } = this.props

    if (!_.isNil(token)) {
      return <Redirect to={PRIVATE}/>
    }

    return (
      <Switch>
        <Route path={LOGIN} component={LoginPage} />
        <Route path={SIGN_UP} component={SignUpPage}/>
        <Route component={FallbackPage}/>
      </Switch>
    )
  }
}

export default PublicRoutePage