import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Clock from './Clock.jsx'

ReactDOM.render(
  <>
    <Clock location='New York' offset={-4} />
    <Clock location='Kyiv' offset={3} />
    <Clock location='London' offset={1} />
  </>,
  document.querySelector('#root')
)
