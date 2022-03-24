import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { useState } from 'react'

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>TodoApp</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={()=>{setShowDropdown((prev) => !prev)}}>
              ☰
            </button>

            {showDropdown && (<div className="dropdown">
              <ul className="dropdownList">
                <li><Link to='/username' onClick={()=>{setShowDropdown((prev) => !prev)}}>Change Username</Link></li>
                <li><Link to='/password'onClick={()=>{setShowDropdown((prev) => !prev)}}>Change Password</Link></li>
                <li>
                  <button className='btn' onClick={onLogout}>
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </ul>
            </div>)}

          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header