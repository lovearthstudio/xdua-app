import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Table, Button } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { EDIT_ROLE } from 'src/data/route'
import { roleShape } from 'src/data/shape/roleShape'
import { buildParamURI, isEnabled } from 'src/util'


@inject(stores => {
  let { roleStore, routingStore } = stores
  let { roles, getRoles, buildEditRoleURI } = roleStore
  let { push } = routingStore

  return {
    roles,
    getRoles,
    buildEditRoleURI,
    push,
  }
})
@observer
class RoleListPage extends Component {
  constructor(props) {
    super(props)
    this.renderRoleList = this.renderRoleList.bind(this)
  }

  componentWillMount() {
    this.props.getRoles()
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    roles: MobxPropTypes.observableArrayOf(roleShape),
    getRoles: PropTypes.func,
    buildEditRoleURI: PropTypes.func,
    push: PropTypes.func,
  }

  renderRoleList() {

    const {
      roles,
      push,
      buildEditRoleURI,
    } = this.props
    return _.map(roles, (role) => {
      let roleId = role.id
      const editGroup = () => {
        const editRoleURI = buildEditRoleURI({ roleId })
        push(editRoleURI)
      }
      // const deleteGroup = () => {
      //   deleteUserGroup({ token:userToken, userGroupId })
      // }

      // const groupDetailURI = buildParamURI({
      //   originalURI: GROUP_DETAIL,
      //   paramName: USER_GROUP_ID,
      //   substitutedValue: userGroupId,
      // })
      return (
        <tr key={roleId}>
          <th scope="row">
            {/*<Link to={groupDetailURI}>*/}
            {role.name}
            {/*</Link>*/}
          </th>
          <th scope="row">{role.ugrp}</th>
          <th scope="row">{role.usroc}</th>
          <th scope="row">{isEnabled(role.enabled)}</th>
          <th scope="row">{role.brief}</th>
          <th scope="row">
            <Button color={'info'} onClick={editGroup}>编辑</Button>
          </th>
          {/*<th scope="row"><Button color={'danger'} onClick={deleteGroup}>删除</Button></th>*/}
        </tr>
      )
    })


  }

  render() {
    return (
      <div>
        角色列表
        <Table responsive>
          <thead>
            <tr>
              <th>名称</th>
              <th>户群名</th>
              <th>授权数量</th>
              <th>状态</th>
              <th>描述</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRoleList()}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default RoleListPage
