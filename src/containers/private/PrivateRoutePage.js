import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import _ from 'lodash'

import {
  LOGIN,
  PROFILE,
  MY_APPS,
} from 'src/data/route'

import FallbackPage  from '../FallbackPage'
import ProfilePage from './profile/ProfilePage'
import MyAppPage from './app/MyAppPage'

import NavBar from '../../components/NavBar'

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
class PrivateRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    userToken: PropTypes.string,
    push: PropTypes.func,
  }

  render() {
    let { userToken, push } = this.props

    if (_.isNil(userToken)) {
      push(LOGIN)
    }

    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path={PROFILE} component={ProfilePage} />
          <Route exact path={MY_APPS} component={MyAppPage}/>
          <Route component={FallbackPage}/>
        </Switch>
      </div>
    )
  }
}

export default PrivateRoutePage