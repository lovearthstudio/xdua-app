import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import GroupForm from 'src/components/GroupForm'

@inject(stores => {
  const { groupStore } = stores
  const { editUserGroup, getUserGroup, loading } = groupStore
  return {
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

  componentDidMount() {
    const { match, getUserGroup } = this.props
    const { userGroupId }  = match.params
    getUserGroup({ userGroupId: userGroupId })
  }

  static propTypes = {
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
