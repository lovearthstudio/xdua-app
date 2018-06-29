import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import _ from 'lodash'

@inject(stores => {
  const { userStore, groupStore } = stores
  const { userToken, userId, ugrp } = userStore
  const { group } = groupStore
  return {
    userToken,
    userId,
    group,
    ugrp,
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
    let { userId, userToken, submit, group, ugrp } = this.props
    let data = {
      token: userToken,
      name,
      avatar: 'null',
      brief,
      ugrp,
    }
    if (_.isNil(group)) {
      data.bywho = userId
      data.code = code
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
    ugrp: PropTypes.string,
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
