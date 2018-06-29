import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Table, Button } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { ROLE } from 'src/data/route'

@inject(stores => {
  let { userStore } = stores
  let { userToken } = userStore

  return {
    userToken,
  }
})
@observer
class GroupDetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userGroupId: null,
      pathname: null,
    }
  }

  componentWillMount() {
    const { match, location } = this.props
    const { userGroupId }  = match.params
    const { pathname } = location
    this.setState({
      userGroupId,
      pathname,
    })
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }

  render() {
    let { userGroupId, pathname } = this.state
    if (_.isNil(userGroupId)) {
      return (
        <div>
          <h1>userGroupId undefined</h1>
        </div>
      )
    }
    return (
      <div>
        <Jumbotron>
          <h3 className='display-4'>户群信息管理</h3>
          <h3>userGroupId: {userGroupId}</h3>
        </Jumbotron>
        <h3>
          <Link to={pathname + ROLE}>
            角色管理
          </Link>
        </h3>

      </div>
    )
  }
}

export default GroupDetailPage
