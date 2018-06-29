import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import _ from 'lodash'

import {
  LOGIN,
  PROFILE,
  MY_APPS,
  MY_GROUPS,
} from 'src/data/route'

import FallbackPage  from '../FallbackPage'
import ProfilePage from './profile/ProfilePage'
import MyAppPage from './app/MyAppPage'
import PrivatePage from './PrivatePage'
import GroupRoutePage from './group/GroupRoutePage'

import NavBar from '../../components/NavBar'

@inject(stores => {
  let { userStore } = stores
  let { userToken } = userStore
  return {
    userToken,
  }
})
@observer
class PrivateRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    userToken: PropTypes.string,
  }

  render() {
    let { userToken } = this.props

    if (_.isNil(userToken)) {
      return <Redirect to={LOGIN}/>

    }

    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path={PROFILE} component={ProfilePage} />
          <Route exact path={MY_APPS} component={MyAppPage}/>
          <Route path={MY_GROUPS} component={GroupRoutePage}/>
          <Route path={'*'} component={PrivatePage}/>
          <Route component={FallbackPage}/>
        </Switch>
      </div>
    )
  }
}

export default PrivateRoutePage