import { ADD_TODO, SET_TODO, DELETE_TODO, UPDATE_TODO } from './constants'

export const initState = {
  todo: '',
  todos: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, { title: action.payload, status: false }]
      }
    }
    case SET_TODO: {
      return {
        ...state,
        todo: action.payload
      }
    }
    case DELETE_TODO: {
      const newTodos = [...state.todos]
      newTodos.splice(action.payload, 1)
      return {
        ...state,
        todos: newTodos
      }
    }
    case UPDATE_TODO: {
      const newTodos = [...state.todos]
      newTodos[action.payload.index].status = action.payload.status
      return {
        ...state,
        todos: newTodos
      }
    }
    default:
      return state
  }
}

export default reducer
