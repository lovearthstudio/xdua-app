import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Table } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { CREATE_GROUP } from 'src/data/route'


@inject(stores => {
  let { groupStore, userStore } = stores
  let { groups, getGroups } = groupStore
  let { userToken } = userStore

  return {
    groups,
    getGroups,
    userToken,
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
    userToken: PropTypes.string,
  }

  renderGroups() {
    const { groups } = this.props
    console.log(groups)
    return _.map(groups, (g) => {
      return (
        <tr key={g.ugrp}>
          <th scope="row">1</th>
          <th scope="row">{g.name}</th>
          <th scope="row">{g.enabled}</th>
          <th scope="row">{g.brief}</th>
          <th scope="row">{g.cstamp}</th>
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
              <th>类型</th>
              <th>描述</th>
              <th>创建修改时间</th>
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
