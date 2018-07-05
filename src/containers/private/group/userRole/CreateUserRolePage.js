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
  let { userRoleStore, routingStore } = stores
  let { buildRoleListURI, initializeRole, createRole, role, loading, error } = userRoleStore
  let { push } = routingStore

  return {
    role,
    initializeRole,
    buildRoleListURI,
    createRole,
    loading,
    error,
    push,
  }
})
@observer
class CreateUserRolePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userGroupId: null,
    }
    this.onCreateUserRole = this.onCreateUserRole.bind(this)
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    role: roleShape,
    buildRoleListURI: PropTypes.func,
    createRole: PropTypes.func,
    initializeRole: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.string,
    push: PropTypes.func,
  }

  componentDidMount() {
    const { match, initializeRole } = this.props
    initializeRole()
    const { userGroupId }  = match.params
    this.setState({
      userGroupId,
    })
  }

  async onCreateUserRole() {
    const { createRole, push, buildRoleListURI } = this.props
    const { userGroupId }  = this.state
    await createRole(userGroupId)

    // must pu the error de-referencing here
    const { error } = this.props
    if (_.isNil(error)) {
      const uri = buildRoleListURI({ userGroupId })
      push(uri)
    }
  }

  render() {
    const { loading, error, role } = this.props

    let result = buildLoadingAndError({ loading, error})
    if (!_.isNil(result)) {
      return result
    }

    return (
      <div>
        创建授权
        <RoleForm role={role} submit={this.onCreateUserRole} isCreate={true}/>
      </div>
    )
  }
}

export default CreateUserRolePage
