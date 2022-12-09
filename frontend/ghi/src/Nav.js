import React from 'react'
import { isLoggedIn, logout } from './library/auth'

function NavItem({ href, text }) {
  return (
    <li className="nav-item">
      <a className="nav-link home-link" href={href}>
        {text}
      </a>
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
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <NavItem href="/" text="Home" />
          <NavItem text="Destinations" href="/destinations" />
          <NavItem text="Themes" href="/themes" />
          <NavItem text="Invitations" href="/invites/creation" />
          <NavItem text="Menu Design" href="/menu/all/" />
          {!isLoggedIn() && <NavItem text="Login" href="/login" />}
          {isLoggedIn() && (
            <>
              <NavItem text="Profile" href="/profile" />
              <Logout />
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
