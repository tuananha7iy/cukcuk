import React, { useState } from 'react'

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'Ruby'
  },
]

function App() {
  const [checked1, setChecked1] = useState(2)
  const [checked, setChecked] = useState([])

  const handlerCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  return (
    <React.Fragment>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        onChange={(e) => {

        }}
        placeholder="Name"
      />
      <div>
        {courses.map(course =>
          <div key={course.id}>
            <input
              type="radio"
              checked={course.id === checked1}
              value={course.id}
              onChange={() => {
                setChecked1(course.id)
              }}
            />
            {course.name}
          </div>
        )}
      </div>
      ahihii
      {courses.map(course =>
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handlerCheck(course.id)}
          />
          {course.name}
        </div>
      )}
      <div>
      </div>
      <button
        className="bg-blue-500 border border-white text-white px-4 py-2"
        onClick={(e) => {

        }}
      >Submit</button>
    </React.Fragment>
  )
}

export default App
