import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Table, Button } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'

import {
  ROLE_LIST,
  USER_GROUP_ID,
} from 'src/data/route'
import { buildParamURI }from 'src/util'

@inject(stores => {
  const { routingStore } = stores
  const { push } = routingStore
  return {
    push,
  }
})
@observer
class GroupDetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userGroupId: null,
    }
    this.onRoleListButtonClick = this.onRoleListButtonClick.bind(this)
  }

  componentDidMount() {
    const { match } = this.props
    const { userGroupId }  = match.params
    this.setState({
      userGroupId,
    })
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    push: PropTypes.func,
  }

  onRoleListButtonClick() {
    const { userGroupId } = this.state
    const { push } = this.props
    const roleListURI = buildParamURI({
      originalURI: ROLE_LIST,
      paramName: USER_GROUP_ID,
      substitutedValue: userGroupId,
    })
    push(roleListURI)
  }

  render() {
    let { userGroupId } = this.state
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
          <Button onClick={this.onRoleListButtonClick}>
            角色列表
          </Button>
        </h3>

      </div>
    )
  }
}

export default GroupDetailPage
