import React from 'react'
import Clock from './Clock.jsx'

const App = () => {
  return (
    <>
      <Clock city={'London'} time={0} />
      <Clock city={'Kyiv'} time={2} />
      <Clock city={'New York'} time={-5} />
    </>
  )
}

export default App
