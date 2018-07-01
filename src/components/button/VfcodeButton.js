import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'

@inject(stores => {
  let { vfcodeStore } = stores
  let { getVfcodeByPhone } = vfcodeStore
  return {
    getVfcodeByPhone,
  }
})
@observer
class VfcodeButton extends Component {
  constructor(props) {
    super(props)
    this.state= {
      disabled: false,
      timer: 60,
      btnText: '获取验证码',
    }
    this.tick = this.tick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.reset = this.reset.bind(this)
  }

  static propTypes = {
    username: PropTypes.string.isRequired,
    getVfcodeByPhone: PropTypes.func,
  }

  onSubmit(e) {
    e.preventDefault()
    let { username, getVfcodeByPhone } = this.props
    getVfcodeByPhone({
      username,
    })
    this.setState({
      disabled: true,
      btnText: this.state.timer.toString(),
    })
  }

  reset() {
    this.setState({
      disabled: false,
      btnText: '获取验证码',
      timer: 60,
    })
  }

  tick() {
    let { disabled, timer } = this.state
    if (disabled === true) {
      if (timer === 1) {
        this.reset()
      } else {
        timer = timer-1
        this.setState({
          timer: timer,
          btnText: timer.toString(),
        })
      }
    }
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    let { disabled, btnText } = this.state
    return (
      <Button
        color={'primary'}
        onClick={this.onSubmit}
        disabled={disabled} >
        {btnText}
      </Button>
    )
  }
}

export default VfcodeButton
