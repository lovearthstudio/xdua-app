import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'



class Table extends Component {
  constructor(props) {
    super(props)
    this.onLogOut = this.onLogOut.bind(this)
  }

  static propTypes = {
    headings: PropTypes.array,
    data: PropTypes.array,
  }

  renderHeadings() {
    const { headings } = this.props
    return _.map(headings, (h) => {
      return (<th scope="row">{h}</th>)
    })
  }

  renderData() {
    const { data } = this.props
    return _.map(data, (o) => {
      return (<th scope="row">{o}</th>)
    })
  }

  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            {this.renderHeadings()}
          </tr>
        </thead>
        <tbody>
          {this.renderData()}
        </tbody>
      </Table>
    )
  }

}

export default Table
