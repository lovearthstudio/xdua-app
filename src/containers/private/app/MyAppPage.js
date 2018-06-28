import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import PropTypes from 'prop-types'
import _ from 'lodash'


@inject(stores => {
  // let { driverStore, orderStore } = stores
  // let { driver, driverId } = driverStore
  // let {
  //   getAvailableSubmissions,
  //   availableSubmissions,
  //   createOrder,
  //   filteredOrders,
  //   setFilterByStart,
  //   setFilterByEnd,
  //   setFilterByLuggageNumber,
  // } = orderStore
  //
  // return {
  //   driver,
  //   driverId,
  //   getAvailableSubmissions,
  //   availableSubmissions,
  //   createOrder,
  //   filteredOrders,
  //   setFilterByStart,
  //   setFilterByEnd,
  //   setFilterByLuggageNumber,
  // }
})
@observer
class ProfilePage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    // driver: MobxPropTypes.observableObject,
    // driverId: PropTypes.string,
    // getAvailableSubmissions: PropTypes.func,
    // availableSubmissions: MobxPropTypes.observableArray,
    // createOrder: PropTypes.func,
    // filteredOrders: PropTypes.array,
    // setFilterByStart: PropTypes.func,
    // setFilterByEnd: PropTypes.func,
    // setFilterByLuggageNumber: PropTypes.func,
  }


  render() {
    return (
      <div>
        <Jumbotron>
          <h3 className='display-4'>我的应用</h3>
        </Jumbotron>
      </div>
    )
  }
}

export default ProfilePage
