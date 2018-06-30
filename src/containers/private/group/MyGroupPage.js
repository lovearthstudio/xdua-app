import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Table, Button } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { CREATE_GROUP } from 'src/data/route'
import {buildParamURI} from "src/util";
import { GROUP_DETAIL, USER_GROUP_ID} from "src/data/route";


@inject(stores => {
  let { groupStore } = stores
  let { groups, getGroups, redirectToSettings, deleteUserGroup } = groupStore

  return {
    groups,
    getGroups,
    redirectToSettings,
    deleteUserGroup,
  }
})
@observer
class MyGroupPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { getGroups } = this.props
    getGroups()
  }

  static propTypes = {
    groups: MobxPropTypes.observableArray,
    getGroups: PropTypes.func,
    redirectToSettings: PropTypes.func,
    deleteUserGroup: PropTypes.func,
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
    } = this.props
    return _.map(groups, (g) => {
      let userGroupId = g.id
      const editGroup = () => {
        redirectToSettings({ userGroupId })
      }
      const deleteGroup = () => {
        deleteUserGroup({ userGroupId })
      }

      const groupDetailURI = buildParamURI({
        originalURI: GROUP_DETAIL,
        paramName: USER_GROUP_ID,
        substitutedValue: userGroupId,
      })
      return (
        <tr key={g.id}>
          <th scope="row">1</th>

          <th scope="row">
            <Link to={groupDetailURI}>
              {g.name}
            </Link>
          </th>
          <th scope="row">{MyGroupPage.renderType(g.enabled)}</th>
          <th scope="row">{g.brief}</th>
          <th scope="row">{g.cstamp}</th>
          <th scope="row">
            <Button color={'info'} onClick={editGroup}>编辑</Button>
            <Button color={'danger'} onClick={deleteGroup}>删除</Button>
          </th>
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

export default MyGroupPage
