import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Table, Button } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'

@inject(stores => {
  return stores
})
@observer
class GroupDetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userGroupId: null,
    }
  }

  componentWillMount() {
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
        </h3>

      </div>
    )
  }
}

export default GroupDetailPage
