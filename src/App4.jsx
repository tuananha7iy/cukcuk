import { useCallback, useReducer, useRef } from 'react'
import Todo from './components/Todo'
import reducer, { initState } from './components/Todo/reducer'
import { setTodo, addTodo, deleteTodo, updateTodo } from './components/Todo/actions'

function App4() {

  const [state, dispatch] = useReducer(reducer, initState)
  const inputRef = useRef()

  const handlerChange = useCallback((index, status) => {
    dispatch(updateTodo({ index, status }))
  }, [])

  const handlerRemove = useCallback((index) => {
    dispatch(deleteTodo(index))
  }, [])
  const handlerAdd = () => {
    if (state.todo !== '') {
      dispatch(addTodo(state.todo))
      dispatch(setTodo(''))
      inputRef.current.focus()
    }
  }
  return (
    <div className="text-center">
      <div className="mt-5 w-30 inline-block text-center">
        <div className="flex justify-evenly">
          <input
            ref={inputRef}
            value={state.todo}
            onChange={(e) => dispatch(setTodo(e.target.value))}
            className="bg-gray-50 px-2 border border-gray-900 rounded-lg mr-2"
            type="text"
            placeholder="Input todo"
          />
          <button
            className="px-4 py-2 bg-blue-400 rounded-lg hover:opacity-70 text-white"
            onClick={handlerAdd}
          >Add</button>
        </div>
        <div className="mt-5">
          {
            state.todos.map((todo, index) =>
              <Todo key={index} index={index} todo={todo} handlerChange={handlerChange} hanlerRemove={handlerRemove} />
            )
          }
        </div>
        <div>
          <p>Total: {state.todos.length}</p>
          <p>Complete: </p>
          <p>Todo: </p>
        </div>
      </div>
    </div>
  )
}

export default App4
