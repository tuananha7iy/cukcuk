import React from 'react'
import CallApi from '../../services'
import './Employees.scss'
import Paginate from '../../layouts/components/Paginate'

function Employees() {
  const pageSize = 15
  const [pageInfo, setPageInfo] = React.useState({
    totalPage: 1,
    totalRecord: 0,
    currentPage: 1
  })
  const [employees, setEmployees] = React.useState([])

  React.useEffect(() => {
    getData()
  }, [])

  const getData = (pageNumber = 1) => {
    CallApi.getEmployees({ pageSize: pageSize, pageNumber: pageNumber }, (data) => {
      setEmployees(data.Data)
      setPageInfo({
        totalPage: data.TotalPage,
        totalRecord: data.TotalRecord,
        currentPage: data.CurrentPage
      })
    })
  }

  return (
    <div className="">
      <div className="block mb-3">
        <h1>Employees page</h1>
      </div>
      <div className="block">
        <table className="table-fixed">
          <thead className="table-header-group">
            <tr className="bg-blue-50">
              <th>STT</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Address</th>
              <th>Date Of Birth</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employ, index) => {
              return (
                <tr classname="odd:bg-gray-100 even:bg-slate-50" key={index}>
                  <td>{++index}</td>
                  <td>{employ.FullName}</td>
                  <td>{employ.Gender === 0 ? 'Male' : employ.Gender === 1 ? 'Female' : ''}</td>
                  <td>{employ.Email}</td>
                  <td>{employ.Address}</td>
                  <td>{
                    (() => {
                      let date = new Date(employ.DateOfBirth)
                      return date.toISOString().split('T')[0]
                    })()
                  }</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Paginate totalPage={pageInfo.totalPage} currentPage={pageInfo.currentPage}
        callback={(page) => {
          getData(page)
        }} />
    </div>
  )
}

export default Employees
