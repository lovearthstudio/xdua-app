import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Table, Button } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { CREATE_GROUP } from 'src/data/route'
import { roleShape } from 'src/data/shape/roleShape'


@inject(stores => {
  let { singleRoleStore } = stores
  let { getRole, role, loading, error } = singleRoleStore

  return {
    role,
    getRole,
    loading,
    error,
  }
})
@observer
class EditRolePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roleId: null,
    }
  }

  componentWillMount() {
    const { match, getRole } = this.props
    const { roleId }  = match.params
    this.setState({
      roleId,
    })
    getRole({
      roleId,
    })
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    role: roleShape,
    getRole: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.string,
  }


  render() {
    const { loading, error, role } = this.props
    const { roleId } = this.state

    if (loading) {
      return (
        <div>
          加载中
        </div>
      )
    }

    if (error) {
      return (
        <div>
          {error}
        </div>
      )
    }

    if (_.isNil(role)) {
      return (
        <div>
          未找到ID为{roleId}的角色
        </div>
      )
    }
    console.log(role)
    return (
      <div>
        编辑角色
        {roleId}
      </div>
    )
  }
}

export default EditRolePage
