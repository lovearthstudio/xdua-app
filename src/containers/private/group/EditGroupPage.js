import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import PropTypes from 'prop-types'

import GroupForm from 'src/components/GroupForm'

@inject(stores => {
  const { userStore, groupStore } = stores
  const { userToken } = userStore
  const { editUserGroup, getUserGroup, loading } = groupStore
  return {
    userToken,
    editUserGroup,
    getUserGroup,
    loading,
  }
})
@observer
class EditGroupPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { userToken, match, getUserGroup } = this.props
    const { userGroupId }  = match.params
    getUserGroup({ token: userToken, userGroupId: userGroupId })
  }

  static propTypes = {
    userToken: PropTypes.string,
    editUserGroup: PropTypes.func,
    getUserGroup: PropTypes.func,
    match: PropTypes.object,
    loading: PropTypes.bool,
  }


  render() {
    let { editUserGroup, loading } = this.props
    if (loading) {
      return (<h3>Loading...</h3>)
    }
    return (
      <div>
        <Jumbotron>
          <h3 className='display-4'>编辑户群</h3>
          <GroupForm
            submit={editUserGroup}/>
        </Jumbotron>
      </div>
    )
  }
}

export default EditGroupPage
