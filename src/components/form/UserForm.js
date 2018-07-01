import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Form, FormGroup, Label, Input, Button, Col, Alert } from 'reactstrap'
import PropTypes from 'prop-types'
import _ from 'lodash'

import VfcodeButton from 'src/components/button/VfcodeButton'

@inject(stores => {
  let { vfcodeStore } = stores
  let { getVfcodeByPhone, error, resetError } = vfcodeStore
  return {
    error,
    getVfcodeByPhone,
    resetError,
  }
})
@observer
class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      vfcode: '',
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleVfcodeChange = this.handleVfcodeChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  static propTypes = {
    error: PropTypes.string,
    submit: PropTypes.func.isRequired,
    resetError: PropTypes.func,
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
    })
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    })
  }
  handleVfcodeChange(e) {
    this.setState({
      vfcode: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    let { username, password, vfcode } = this.state
    this.props.submit({
      username,
      password,
      vfcode,
    })
  }

  componentWillUnmount() {
    this.props.resetError()
  }

  renderError() {
    if (!_.isNil(this.props.error)) {
      return (
        <div>
          <Alert color="danger">
            {this.props.error}
          </Alert>
        </div>
      )
    }
  }

  render() {
    let { username } = this.state
    return (
      <Form>
        {this.renderError()}
        <FormGroup row>
          <Label for="username" sm={4}><h4>电话</h4></Label>
          <Col>
            <Input
              type="text"
              id="username"
              onChange={this.handleUsernameChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="vfcode" sm={4}><h4>验证码</h4></Label>
          <Col>
            <Input
              type="text"
              id="vfcode"
              onChange={this.handleVfcodeChange}
            />
          </Col>
          <Col>
            <VfcodeButton username={username}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={4}><h4>密码</h4></Label>
          <Col>
            <Input
              type="password"
              id="password"
              onChange={this.handlePasswordChange}
            />
          </Col>
        </FormGroup>
        <Button block color={'primary'} type={'submit'} onClick={this.onSubmit}>确认</Button>
      </Form>
    )
  }
}

export default UserForm
