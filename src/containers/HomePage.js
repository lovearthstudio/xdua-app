import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { LOGIN } from '../data/route'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        主页面
        <br/>
        <Link to={LOGIN}>
          <Button>
            登陆
          </Button>
        </Link>
      </div>
    )
  }
}

export default HomePage
