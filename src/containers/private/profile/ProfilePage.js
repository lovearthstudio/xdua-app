import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import PropTypes from 'prop-types'
import _ from 'lodash'


@inject(stores => {
  let { authenticationStore } = stores
  let { profile, getProfile } = authenticationStore

  return {
    profile,
    getProfile,
  }
})
@observer
class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.props.getProfile()
  }

  static propTypes = {
    getProfile: PropTypes.func,
    profile: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      brief: PropTypes.string,
      tel: PropTypes.string,
      saying: PropTypes.string,
    }),
  }

  componentWillMount() {
  }

  renderProfile() {
    let { profile } = this.props
    if (_.isNil(profile)) {
      return (
        <div>未找到账户信息</div>)
    } else {
      let { id, name } = profile
      return(<div>
          账号ID： {id}<br/>
          name: {name}</div>)
    }
  }


  render() {
    return (
      <div>
        <Jumbotron>
          <h3 className='display-4'>用户信息页面</h3>
        </Jumbotron>
        <div>
          {this.renderProfile()}
        </div>
      </div>
    )
  }
}

export default ProfilePage
