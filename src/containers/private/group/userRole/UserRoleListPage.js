import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Table, Button } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { EDIT_ROLE, CREATE_ROLE } from 'src/data/route'
import { roleShape } from 'src/data/shape/roleShape'
import { userRoleShape } from 'src/data/shape/userRoleShape'
import { buildParamURI, isEnabled } from 'src/util'
import { buildLoadingAndError } from 'src/util'

@inject(stores => {
  let { userRoleStore, routingStore } = stores
  let {
    userRoles,
    getUserRoles,
    buildCreateUserRoleURI,
    buildEditRoleURI,
    loading,
    error } = userRoleStore
  let { push } = routingStore

  return {
    userRoles,
    getUserRoles,
    buildCreateUserRoleURI,
    buildEditRoleURI,
    push,
    loading,
    error,
  }
})
@observer
class UserRoleListPage extends Component {
  constructor(props) {
    super(props)
    this.renderUserRoleList = this.renderUserRoleList.bind(this)
    this.state = {
      userGroupId: null,
    }
  }

  componentDidMount() {
    const { params } = this.props.match
    const { userGroupId } = params
    this.setState({
      userGroupId,
    })
    this.props.getUserRoles(userGroupId)
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    userRoles: MobxPropTypes.observableArrayOf(userRoleShape),
    getUserRoles: PropTypes.func,
    buildEditRoleURI: PropTypes.func,
    push: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.string,
  }

  renderUserRoleList() {
    const { userGroupId } = this.state

    const {
      userRoles,
      push,
      buildEditRoleURI,
    } = this.props
    console.log(userRoles)
    return _.map(userRoles, (userRole) => {
      let userRoleId = userRole.id
      // const editGroup = () => {
      //   const editRoleURI = buildEditRoleURI({ roleId, userGroupId })
      //   push(editRoleURI)
      // }
      // const deleteGroup = () => {
      //   deleteUserGroup({ token:userToken, userGroupId })
      // }

      // const groupDetailURI = buildParamURI({
      //   originalURI: GROUP_DETAIL,
      //   paramName: USER_GROUP_ID,
      //   substitutedValue: userGroupId,
      // })
      return (
        <tr key={userRoleId}>
          {/*<th scope="row">*/}
            {/*/!*<Link to={groupDetailURI}>*!/*/}
            {/*{userRole.name}*/}
            {/*/!*</Link>*!/*/}
          {/*</th>*/}
          <th scope="row">{userRole.uid}</th>
          <th scope="row">{userRole.role}</th>
          <th scope="row">{userRole.byuid}</th>
          <th scope="row">{userRole.note}</th>
          <th scope="row">{isEnabled(userRole.enabled)}</th>
          {/*<th scope="row">*/}
            {/*<Button color={'info'} onClick={editGroup}>编辑</Button>*/}
          {/*</th>*/}
          {/*<th scope="row"><Button color={'danger'} onClick={deleteGroup}>删除</Button></th>*/}
        </tr>
      )
    })
  }

  render() {
    const { loading, error, buildCreateUserRoleURI } = this.props
    const { userGroupId } = this.state
    let result = buildLoadingAndError({ loading, error})
    if (!_.isNil(result)) {
      return result
    }

    const createUserRoleURI = buildCreateUserRoleURI({ userGroupId })

    return (
      <div>
        <Link to={createUserRoleURI}>
          <Button color={'primary'} >创建授权</Button>
        </Link>
        授权列表 from 用户群：{this.state.userGroupId}
        <Table responsive>
          <thead>
            <tr>
              <th>用户名字</th>
              <th>用户角色</th>
              <th>授权人名字</th>
              <th>备注</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {this.renderUserRoleList()}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default UserRoleListPage
