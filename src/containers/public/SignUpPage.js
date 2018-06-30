import React, { Component } from 'react'
import { Jumbotron, Form, FormGroup, Label, Input, Button, Alert, Col, Container, Row } from 'reactstrap'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { LOGIN } from 'src/data/route'

class SignUpPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
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
    this.props.signUp({
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
          <h2 className='display-4'>用户注册</h2>
          {this.renderError()}
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <Form>
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
                      onChange={this.handleUsernameChange}
                    />
                  </Col>
                  <Col>
                    <Button color={'primary'} type={'submit'} onClick=''>发送验证码</Button>
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
                <Button color={'primary'} type={'submit'} onClick={this.onSubmit}>注册</Button>
              </Form>
            </Col>
            <Col>
              已有地球号账户?
              <Link to={LOGIN}>立即登录</Link>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}

export default SignUpPage
