import React from 'react'
import './Paginate'

function Paginate({
  totalPage = 1,
  currentPage = 1,
  callback
}) {
  const handlerClick = (page) => {
    if (typeof callback === 'function') {
      callback(page)
    }
  }
  return (
    <div class="flex">
      {(() => {
        let pageActive = 'bg-blue-400'
        let pageDefault = 'bg-gray-400'
        let numPaging = 3
        let array = []
        if (currentPage !== 1 && totalPage > 1) {
          array.push(
            <div
              className="w-6 h-6 flex items-center justify-center m-2"
            >
              <p>
                &lt;&lt;
              </p>
            </div>
          )
        }
        if (currentPage > numPaging) {
          array.push(
            <div
              className={`${totalPage === currentPage ? pageActive : pageDefault} rounded-full w-6 h-6 flex items-center justify-center m-2`}
            >
              <p className="text-white" key={1}>{1}</p>
            </div>
          )
          array.push(
            <div className="w-6 h-6 flex items-center justify-center m-2">
              <p>
                ...
              </p>
            </div>
          )
        }
        let index = currentPage
        if (currentPage > numPaging) {
          index = currentPage - numPaging
        }
        for (index; index < totalPage; index++) {
          if (index >= currentPage + numPaging) {
            break
          }
          let index_ = index
          array.push(
            <div
              className={`${index === currentPage ? pageActive : pageDefault} rounded-full w-6 h-6 flex items-center justify-center m-2`}
              onClick={() => handlerClick(index_)}
            >
              <p className="text-white" key={index}>{index}</p>
            </div>
          )
        }
        if (totalPage > numPaging) {
          array.push(
            <div
              className="w-6 h-6 flex items-center justify-center m-2">
              <p>
                ...
              </p>
            </div>
          )
        }
        if (totalPage > index) {
          array.push(
            <div
              className={`${totalPage === currentPage ? pageActive : pageDefault} rounded-full w-6 h-6 flex items-center justify-center m-2`}
              onClick={() => handlerClick(totalPage)}
            >
              <p className="text-white" key={totalPage}>{totalPage}</p>
            </div>
          )
        }
        if (currentPage !== totalPage && totalPage > 1) {
          array.push(
            <div
              className="w-6 h-6 flex items-center justify-center m-2"
              onClick={() => handlerClick(++currentPage)}
            >
              <p>
                &gt;&gt;
              </p>
            </div>
          )
        }
        return array
      })()}
    </div>
  )
}

export default Paginate
