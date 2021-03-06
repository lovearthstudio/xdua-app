import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Table, Button } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { CREATE_GROUP } from 'src/data/route'
import { roleShape } from 'src/data/shape/roleShape'
import { buildLoadingAndError } from 'src/util'
import RoleForm from 'src/components/RoleForm'


@inject(stores => {
  let { singleRoleStore, routingStore } = stores
  let { getRole, editRole, buildRoleListURI, role, loading, error } = singleRoleStore
  let { push } = routingStore

  return {
    role,
    getRole,
    buildRoleListURI,
    editRole,
    loading,
    error,
    push,
  }
})
@observer
class EditRolePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roleId: null,
      userGroupId: null,
    }
    this.onEditRole = this.onEditRole.bind(this)
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    role: roleShape,
    getRole: PropTypes.func,
    editRole: PropTypes.func,
    buildRoleListURI: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.string,
    push: PropTypes.func,
  }

  componentDidMount() {
    const { match, getRole } = this.props
    const { roleId, userGroupId }  = match.params
    this.setState({
      roleId,
      userGroupId,
    })
    getRole({
      roleId,
    })
  }

  async onEditRole() {
    const { editRole, buildRoleListURI, push } = this.props
    const { userGroupId } = this.state

    await editRole()

    // must pu the error de-referencing here
    const { error } = this.props
    if (_.isNil(error)) {
      const uri = buildRoleListURI({ userGroupId })
      push(uri)
    }
  }


  render() {
    const { loading, error, role } = this.props
    const { roleId } = this.state

    let result = buildLoadingAndError({ loading, error})
    if (!_.isNil(result)) {
      return result
    }

    if (_.isNil(role)) {
      return (
        <div>
          未找到ID为{roleId}的角色
        </div>
      )
    }

    return (
      <div>
        编辑角色
        {roleId}
        <RoleForm role={role} submit={this.onEditRole} isCreate={false}/>
      </div>
    )
  }
}

export default EditRolePage
