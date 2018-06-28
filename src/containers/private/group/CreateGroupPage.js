import React, { Component } from 'react'
import { Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap'


class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      id: '',
      description: '',
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleIdChange = this.handleIdChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    })
  }

  handleIdChange(e) {
    this.setState({
      id: e.target.value,
    })
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    // let { username, password } = this.state
    // this.props.createGroup({
    //   username,
    //   password,
    // })
  }


  render() {
    return (
      <div>
        <Jumbotron>
          <h3 className='display-4'>Create Group</h3>
        </Jumbotron>
        <Form>
          <FormGroup>
            <Label for="id"><h4>ID</h4></Label>
            <Input
              type="text"
              id="id"
              onChange={this.handleIdChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="username"><h4>名</h4></Label>
            <Input
              type="text"
              id="username"
              onChange={this.handleNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description"><h4>description</h4></Label>
            <Input
              type="text"
              id="description"
              onChange={this.handleDescriptionChange}
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Public
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Private
            </Label>
          </FormGroup>
          <Button color={'primary'} type={'submit'} onClick={this.onSubmit}>Create</Button>
        </Form>

      </div>
    )
  }
}

export default ProfilePage
