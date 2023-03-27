import React, { Component } from 'react'
import './clock.scss'

class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: new Date(),
    }

    setInterval(() => {
      this.setState({ time: this.getTimeWithOffset(this.props.time) })
    }, 1000)
  }

  getTimeWithOffset = offset => {
    const currentTime = new Date()
    const utcOffset = currentTime.getTimezoneOffset() / 60
    return new Date(
      currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    )
  }

  render() {
    return (
      <div className='clock'>
        <div className='clock__location'>{this.props.city}</div>
        <div className='clock__time'>
          {this.state.time.toLocaleTimeString()}
        </div>
      </div>
    )
  }
}

export default Clock
