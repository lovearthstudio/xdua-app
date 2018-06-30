import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import { inject, observer } from 'mobx-react/index'
import PropTypes from 'prop-types'
import GroupForm from 'src/components/GroupForm'

@inject(stores => {
  const { authenticationStore, groupStore } = stores
  const { userId } = authenticationStore
  const { createUserGroup } = groupStore
  return {
    userId,
    createUserGroup,
  }
})
@observer
class CreateGroupPage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    userId: PropTypes.string,
    createUserGroup: PropTypes.func,
  }


  render() {
    let { createUserGroup } = this.props
    return (
      <div>
        <Jumbotron>
          <h3 className='display-4'>创建户群</h3>
          <GroupForm submit={createUserGroup} creating={true}/>
        </Jumbotron>
      </div>
    )
  }
}

export default CreateGroupPage
