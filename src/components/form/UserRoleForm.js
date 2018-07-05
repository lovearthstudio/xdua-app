import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import PropTypes from 'prop-types'

import { userRoleShape } from 'src/data/shape/userRoleShape'

@observer
class UserRoleForm extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  static propTypes = {
    userRole: userRoleShape,
    submit: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.submit()
  }

  render() {
    const { userRole, isCreate } = this.props
    const { uid, role, byuid, expire, note, enabled } = userRole
    return (
      <Form>
        {/*{isCreate*/}
          {/*?*/}
          {/*<FormGroup>*/}
            {/*<Label for="code"><h4>代号</h4></Label>*/}
            {/*<Input*/}
              {/*type="text"*/}
              {/*id="code"*/}
              {/*onChange={(e) => role.code = e.target.value}*/}
              {/*value={code}/>*/}
          {/*</FormGroup>*/}
          {/*:*/}
          {/*<h4>代号: {code}</h4>*/}
        {/*}*/}

        {/*{*/}
          {/*isCreate*/}
          {/*&&*/}
          {/*<FormGroup>*/}
            {/*<Label for="username"><h4>授权人</h4></Label>*/}
            {/*<Input*/}
              {/*type="text"*/}
              {/*id="code"*/}
              {/*onChange={(e) => role.granter = e.target.value}*/}
              {/*value={granter}/>*/}
          {/*</FormGroup>*/}
        {/*}*/}

        <FormGroup>
          <Label for="name"><h4>角色</h4></Label>
          <Input
            type="text"
            id="name"
            onChange={(e) => userRole.role = e.target.value}
            value={name}/>
        </FormGroup>
        <FormGroup>
          <Label for="brief"><h4>用户ID</h4></Label>
          <Input
            type="text"
            id="brief"
            onChange={(e) => userRole.uid = e.target.value}
            value={brief}/>
        </FormGroup>
        <FormGroup>
          <Label for="avatar"><h4>描述</h4></Label>
          <Input
            type="text"
            id="avatar"
            onChange={(e) => role.note = e.target.value}
            value={avatar}/>
        </FormGroup>
        <Button color={'primary'} type={'submit'} onClick={this.onSubmit}>确定</Button>
      </Form>
    )
  }
}

export default UserRoleForm
