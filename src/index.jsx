import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Clock from './Clock.jsx'

ReactDOM.render(
  <>
    <Clock city='New York' time={-4} />
    <Clock city='Kyiv' time={3} />
    <Clock city='London' time={1} />
  </>,
  document.querySelector('#root')
)
