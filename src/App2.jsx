import React from 'react'
import ChildComponent from './ChildComponent'
import { ExampleContext } from './GlobalContext'

const countReducer = (state, action) => {
  const { type, step } = action
  switch (type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + step
      }
    }
    case 'DECREMENT': {
      return {
        ...state,
        count: state.count - step
      }
    }
    default:
      return state
  }
}

const Counter = ({ initialCount = 0, step = 1 }) => {
  const [state, dispath] = React.useReducer(countReducer, {
    count: initialCount
  })
  const { count } = state;
  const increment = () => dispath({ type: 'INCREMENT', step })
  const decrement = () => dispath({ type: 'DECREMENT', step })
  return (
    <div>
      <button onClick={decrement} className="px-10 m-10 py-5 bg-blue-300">-</button>
      <span>{count}</span>
      <button onClick={increment} className="px-10 m-10 py-5 bg-blue-300">+</button>
    </div>
  )
}

const initState = 0

const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('Invalid action')
  }
}

const ReducerComponent = () => {
  const [count, dispatch] = React.useReducer(reducer, initState)
  return (
    <div>
      <button onClick={() => dispatch(DOWN_ACTION)} className="px-10 m-10 py-5 bg-blue-300">-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(UP_ACTION)} className="px-10 m-10 py-5 bg-blue-300">+</button>
    </div>
  )
}

function App() {
  return (
    <ExampleContext.Provider value={{ color: 'blue' }} >
      <div className="text-center">
        <ChildComponent />
      </div>
      <Counter />
      <ReducerComponent />
    </ExampleContext.Provider>
  );
}

export default App;
