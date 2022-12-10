import React from 'react'
import { useState } from 'react'
import { isLoggedIn, logout } from './library/auth'
import Flower_logo from './images/Flower_logo.png'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


// const Test = styled.div`
//   background-color: blue;
// `

function NavItem({ href, text }) {
  return (
    <li className="nav-item">
      <Link className="nav-link home-link" to={href}>
        {text}
      </Link>
    </li>
  )
}

function Logout() {
  return (
    <li className="nav-item">
      <div
        onClick={logout}
        style={{ cursor: 'pointer' }}
        className="nav-link home-link"
      >
        Logout
      </div>
    </li>
  )
}

function Nav() {

  const { pathname } = useLocation();
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 865) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (

    <div className={pathname === "/"? color ? "header header-bg" : "header": "header-bg"}>
      <nav className="navbar navbar-expand-lg fixed-top mask-custom" id="nav-active">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mb-lg-2">
              <Link className="navbar-brand" to="/"><span><img src={Flower_logo} alt={"hello"} height="45px" />Forever & Always</span></Link>

            </ul>
            <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
              <NavItem href="/" text="Home" />
              <NavItem text="Destinations" href="/destinations" />
              <NavItem text="Themes" href="/themes" />
              <NavItem text="Invitations" href="/invites/creation" />
              <NavItem text="Menu Design" href="/menu/all/" />
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!isLoggedIn() && <NavItem text="Login" href="/login" />}
              {isLoggedIn() && (
                <>
                  <NavItem text="Profile" href="/profile" />
                  <Logout />
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>


  )
}

export default Nav
