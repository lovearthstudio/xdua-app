import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import PropTypes from 'prop-types'
import _ from 'lodash'

@inject(stores => {
  let { userStore } = stores
  let { login, error } = userStore
  return {
    login,
    error,
  }
})
@observer
class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.renderError = this.renderError.bind(this)
  }

  static propTypes = {
    login: PropTypes.func,
    error: PropTypes.string,
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
  onSubmit(e) {
    e.preventDefault()
    let { username, password } = this.state
    this.props.login({
      username,
      password,
    })
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
    return (
      <div>
        <Jumbotron>
          <h2 className='display-4'>登陆页面</h2>
          {this.renderError()}
          <br/>
          <Form>
            <FormGroup>
              <Label for="username"><h4>用户名</h4></Label>
              <Input
                type="text"
                id="username"
                onChange={this.handleUsernameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password"><h4>密码</h4></Label>
              <Input
                type="text"
                id="password"
                onChange={this.handlePasswordChange}
              />
            </FormGroup>
            <Button color={'primary'} type={'submit'} onClick={this.onSubmit}>登陆</Button>
          </Form>
        </Jumbotron>
      </div>
    )
  }
}

export default LoginPage
