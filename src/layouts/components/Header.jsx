import { Link } from "react-router-dom"
import config from '../../config'

function Header() {
  return (
    <div className="h-14 bg-blue-600 text-white flex items-center justify-between px-10 py-2">
      <div className="flex items-center justify-evenly">
        <Link className="mr-5 text-xl font-bold" to={config.routes.home}>
          Home
        </Link>

        <Link className="mr-5 font-bold" to={config.routes.employees}>
          Employees
        </Link>
      </div>
      <div className="flex items-center justify-end">
      </div>
    </div>
  )
}

export default Header
