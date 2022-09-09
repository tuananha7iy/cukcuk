import React from 'react'
import { ExampleContext } from './GlobalContext'
import Child2Component from './Child2Component'

function ChildComponent() {
  const { color } = React.useContext(ExampleContext)
  return (
    <div style={{ color }} >
      This text is {color}
      <ExampleContext.Provider value={{ color: 'red' }}>
        <Child2Component />
        This text is {color}
      </ExampleContext.Provider>
    </div>
  )
}

export default ChildComponent
