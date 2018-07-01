import React, { Component } from 'react'
import { Jumbotron, Col, Container, Row, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { LOGIN } from 'src/data/route/index'
import UserForm from 'src/components/form/UserForm'


@inject(stores => {
  let { userStore } = stores
  let { signUpByPhone, error } = userStore
  return {
    signUpByPhone,
    error,
  }
})
@observer
class SignUpPage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    error: PropTypes.string,
    signUpByPhone: PropTypes.func,
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
    let { signUpByPhone } = this.props
    return (
      <div>
        <Jumbotron>
          <h2 className='display-4'>用户注册</h2>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <div>
                {this.renderError()}
                <UserForm submit={signUpByPhone}/>
              </div>
            </Col>
          </Row>
          <div>
            已有地球号账户?
            <Link to={LOGIN}>立即登录</Link>
          </div>
        </Container>
      </div>
    )
  }
}

export default SignUpPage
