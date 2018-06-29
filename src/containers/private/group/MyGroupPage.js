import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Table } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { CREATE_GROUP } from 'src/data/route'


@inject(stores => {
  let { groupStore, userStore } = stores
  let { groups, getGroups, redirectToSettings, deleteUserGroup } = groupStore
  let { userToken, ugrp } = userStore

  return {
    userToken,
    ugrp,
    groups,
    getGroups,
    redirectToSettings,
    deleteUserGroup,
  }
})
@observer
class ProfilePage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { getGroups, userToken } = this.props
    getGroups({userToken})
  }

  static propTypes = {
    groups: MobxPropTypes.observableArray,
    getGroups: PropTypes.func,
    redirectToSettings: PropTypes.func,
    deleteUserGroup: PropTypes.func,
    userToken: PropTypes.string,
    ugrp: PropTypes.string,
  }

  renderType(type) {
    if (type === '1') {
      return '已激活'
    }
    return '未激活'
  }

  renderGroups() {
    const {
      groups,
      redirectToSettings,
      deleteUserGroup,
      userToken,
      ugrp,
    } = this.props
    return _.map(groups, (g) => {
      const editGroup = () => {
        redirectToSettings({ groupId: g.id })
      }
      const deleteGroup = () => {
        deleteUserGroup({ token:userToken, ugrp })
      }
      return (
        <tr key={g.id}>
          <th scope="row">1</th>
          <th scope="row">{g.name}</th>
          <th scope="row">{this.renderType(g.enabled)}</th>
          <th scope="row">{g.brief}</th>
          <th scope="row">{g.cstamp}</th>
          <th scope="row"><button onClick={editGroup}>编辑</button></th>
          <th scope="row"><button onClick={deleteGroup}>删除</button></th>
        </tr>
      )
    })
  }


  render() {
    return (
      <div>
        <Jumbotron>
          <h3 className='display-4'>我的户群</h3>
        </Jumbotron>
        <div>
          <input placeholder='search group'/>
          <Link to={CREATE_GROUP}>
            <button >create Group</button>
          </Link>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>名称</th>
              <th>状态</th>
              <th>描述</th>
              <th>创建修改时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {this.renderGroups()}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default ProfilePage
