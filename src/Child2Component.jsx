import React from 'react'
import { ExampleContext } from './GlobalContext'

function Child2Component() {
  const { color } = React.useContext(ExampleContext)
  return (
    <p style={{ color }} >
      This text is {color}
    </p>
  )
}

export default Child2Component
