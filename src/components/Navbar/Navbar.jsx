import './Navbar.css'

import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login', { replace: true })
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Go Business</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Dashboard</Link>

        <button
          type="button"
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar