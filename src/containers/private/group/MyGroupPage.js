import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Table, Button } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { CREATE_GROUP } from 'src/data/route'


@inject(stores => {
  let { groupStore, userStore } = stores
  let { groups, getGroups, redirectToSettings, deleteUserGroup } = groupStore
  let { userToken } = userStore

  return {
    userToken,
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
  }

  static renderType(type) {
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
    } = this.props
    return _.map(groups, (g) => {
      const editGroup = () => {
        redirectToSettings({ userGroupId: g.id })
      }
      const deleteGroup = () => {
        deleteUserGroup({ token:userToken, userGroupId: g.id })
      }
      return (
        <tr key={g.id}>
          <th scope="row">1</th>
          <th scope="row">{g.name}</th>
          <th scope="row">{ProfilePage.renderType(g.enabled)}</th>
          <th scope="row">{g.brief}</th>
          <th scope="row">{g.cstamp}</th>
          <th scope="row"><Button color={'info'} onClick={editGroup}>编辑</Button></th>
          <th scope="row"><Button color={'danger'} onClick={deleteGroup}>删除</Button></th>
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
            <Button color={'primary'} >create Group</Button>
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
