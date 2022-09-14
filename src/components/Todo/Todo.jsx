import { memo, useState } from 'react'
import { CheckIcon, SquareIcon, TrashIcon } from '../Icons'

function Todo({ todo, index, hanlerRemove, handlerChange }) {
  const [status, setStatus] = useState(todo.status)
  console.log(todo)
  return (
    <div className="flex my-2 justify-between">
      <div className="flex justify-start flex-1">
        <button
          className="rounded-lg hover:opacity-70 bg-gray-200 px-2 py-2"
          onClick={() => {
            handlerChange(index, !status)
            setStatus(!status)
          }}>
          {status ?
            <CheckIcon className="text-red-400" />
            :
            <SquareIcon className="text-red-400" />
          }
        </button>
        <p
          className={`${status ? 'bg-green-300' : ''} flex px-5 rounded-lg mx-2 w-full items-center font-bold text-lg`}
        >{todo.title}</p>
      </div>
      <button
        className="rounded-lg hover:bg-gray-100 px-2 py-2"
        onClick={() => hanlerRemove(index)}>
        <TrashIcon className="text-red-400" />
      </button>
    </div>
  )
}

export default memo(Todo)
