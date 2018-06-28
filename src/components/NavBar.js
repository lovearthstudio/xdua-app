import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Navbar, Nav, NavbarBrand, NavItem, NavLink, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { PROFILE, MY_APPS, MY_GROUPS } from '../data/route'

@inject(stores => {
  const { userStore } = stores
  const { logOut } = userStore
  return {
    logOut,
  }
})
@observer
class NavBar extends Component {
  constructor(props) {
    super(props)
    this.onLogOut = this.onLogOut.bind(this)
  }

  static propTypes = {
    logOut: PropTypes.func,
  }

  onLogOut() {
    this.props.logOut()
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>地球号</NavbarBrand>
          <Nav className="ml-auto" navbar>

            <NavItem>
              <NavLink tag={Link} to={PROFILE}>
                用户信息
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={MY_GROUPS}>
                我的户群
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={MY_APPS}>
                我的应用
              </NavLink>
            </NavItem>
            <NavItem>
              <Button onClick={this.onLogOut} color={'danger'}>
                登出
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }

}

export default NavBar
