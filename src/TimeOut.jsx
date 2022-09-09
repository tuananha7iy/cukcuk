import React from 'react'
import ToggleButton from './components/Buttons'
import GlobalStyles from './components/GlobalStyles'

function App() {
  const [count, setCount] = React.useState(180)

  React.useEffect(() => {
    let time
    const timeId = setInterval(() => {
      setCount(prevState => {
        time = prevState
        return prevState - 1
      })
    }, 10)
    return () => clearTimeout(timeId)
  }, [])

  return (
    <GlobalStyles>
      <ToggleButton onClick={(state) => {

      }} />
      <div>
        <span className="text-red-600 text-3xl px-10 my-10">{count}</span>
      </div>
    </GlobalStyles>
  )
}

export default App
