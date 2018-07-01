import React, { Component } from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { roleShape } from 'src/data/shape/roleShape'

@observer
class RoleForm extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  static propTypes = {
    role: roleShape,
    submit: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.submit()
  }

  render() {
    const { role, isCreate } = this.props
    const { avatar, brief, enabled, granter, name, code } = role
    return (
      <Form>
        {isCreate
          ?
          <FormGroup>
            <Label for="code"><h4>代号</h4></Label>
            <Input
              type="text"
              id="code"
              onChange={(e) => role.code = e.target.value}
              value={code}/>
          </FormGroup>
          :
          <h4>代号: {code}</h4>
        }

        {
          isCreate
          &&
          <FormGroup>
            <Label for="username"><h4>授权人</h4></Label>
            <Input
              type="text"
              id="code"
              onChange={(e) => role.granter = e.target.value}
              value={granter}/>
          </FormGroup>
        }

        <FormGroup>
          <Label for="name"><h4>名称</h4></Label>
          <Input
            type="text"
            id="name"
            onChange={(e) => role.name = e.target.value}
            value={name}/>
        </FormGroup>
        <FormGroup>
          <Label for="brief"><h4>描述</h4></Label>
          <Input
            type="text"
            id="brief"
            onChange={(e) => role.brief = e.target.value}
            value={brief}/>
        </FormGroup>
        <FormGroup>
          <Label for="avatar"><h4>头像</h4></Label>
          <Input
            type="text"
            id="avatar"
            onChange={(e) => role.avatar = e.target.value}
            value={avatar}/>
        </FormGroup>
        <Button color={'primary'} type={'submit'} onClick={this.onSubmit}>确定</Button>
      </Form>
    )
  }
}

export default RoleForm
