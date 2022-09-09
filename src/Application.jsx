import React, { useReducer } from 'react'
import { CheckIcon, SquareIcon, TrashIcon } from './components/Icons'

function App() {
  return (
    <div className="text-center">
      <div className="mt-5 w-30 inline-block text-center">
        <div className="flex justify-evenly">
          <input
            className="bg-gray-50 px-2 border border-gray-900 rounded-lg mr-2"
            type="text"
            placeholder="Input todo"
          />
          <button className="px-4 py-2 bg-blue-400 rounded-lg hover:opacity-70 text-white">Add</button>
        </div>
        <div className="mt-5">
          <div className="flex justify-between">
            <div className="flex justify-start flex-1">
              <button className="rounded-lg hover:opacity-70 bg-gray-200 px-2 py-2">
                <SquareIcon className="text-red-400" />
              </button>
              <p className="flex items-center font-bold text-lg ml-5">Hihi</p>
            </div>
            <button className="rounded-lg hover:bg-gray-100 px-2 py-2">
              <TrashIcon className="text-red-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
