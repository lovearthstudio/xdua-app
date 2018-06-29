import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import _ from 'lodash'

@inject(stores => {
  const { userStore, groupStore } = stores
  const { userToken, userId } = userStore
  const { group } = groupStore
  return {
    userToken,
    userId,
    group,
  }
})
@observer
class GroupForm extends Component {
  constructor(props) {
    super(props)
    const { group, creating } = this.props
    if (creating === true) {
      this.state = {
        name: '',
        code: '',
        brief: '',
      }
    } else {
      this.state = {
        name: group.name,
        code: group.code,
        brief: group.brief,
      }
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleCodeChange = this.handleCodeChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    })
  }

  handleCodeChange(e) {
    this.setState({
      code: e.target.value,
    })
  }

  handleDescriptionChange(e) {
    this.setState({
      brief: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    let { name, code, brief } = this.state
    let { userId, userToken, submit, group } = this.props
    let data = {
      token: userToken,
      name,
      // todo: refactor this to the data folder
      avatar: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/profile-icon.png',
      brief,
    }
    if (_.isNil(group.id)) {
      data.bywho = userId
      data.code = code
    } else {
      data.userGroupId = group.id
    }
    submit(data)
  }

  static propTypes = {
    group: PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string,
      brief: PropTypes.string,
    }),
    userToken: PropTypes.string,
    userId: PropTypes.string,
    submit: PropTypes.func.isRequired,
    creating: PropTypes.bool,
  }

  render() {
    let { code, name, brief } = this.state
    return (
      <Form>
        <FormGroup>
          <Label for="id"><h4>代号</h4></Label>
          <Input
            type="text"
            id="code"
            onChange={this.handleCodeChange}
            value={code}/>
        </FormGroup>
        <FormGroup>
          <Label for="username"><h4>名称</h4></Label>
          <Input
            type="text"
            id="name"
            onChange={this.handleNameChange}
            value={name}/>
        </FormGroup>
        <FormGroup>
          <Label for="description"><h4>描述</h4></Label>
          <Input
            type="text"
            id="brief"
            onChange={this.handleDescriptionChange}
            value={brief}/>
        </FormGroup>
        <Button color={'primary'} type={'submit'} onClick={this.onSubmit}>确定</Button>
      </Form>
    )
  }
}

export default GroupForm
