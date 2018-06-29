import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Table, Button } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { CREATE_GROUP } from 'src/data/route'


@inject(stores => {
  let { userStore } = stores
  let { userToken } = userStore

  return {
    userToken,
  }
})
@observer
class RoleListPage extends Component {
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
    return (
      <div>
        角色列表
      </div>
    )
  }
}

export default RoleListPage
