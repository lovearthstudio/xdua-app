import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import _ from 'lodash'

import {
  LOGIN,
  PROFILE,
} from 'src/data/route'

import FallbackPage  from '../FallbackPage'
import LoginPage from './user/LoginPage'
import {inject, observer} from 'mobx-react/index'


@inject(stores => {
  let { userStore, routingStore } = stores
  let { userToken } = userStore
  let { push } = routingStore
  return {
    userToken,
    push,
  }
})
@observer
class PublicRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    userToken: PropTypes.string,
    push: PropTypes.func,
  }

  render() {
    let { userToken, push } = this.props

    if (!_.isNil(userToken)) {
      push(PROFILE)
    }

    return (
      <Switch>
        <Route path={LOGIN} component={LoginPage} />
        <Route component={FallbackPage}/>
      </Switch>
    )
  }
}

export default PublicRoutePage