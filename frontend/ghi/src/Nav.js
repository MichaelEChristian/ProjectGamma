import React from 'react'
import { isLoggedIn, logout } from './library/auth'
import Flower_logo from './images/Flower_logo.png'

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
    <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0" id="nav-active">
      <div class="container">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mb-lg-2">
      <a class="navbar-brand" href="/"><span><img src={Flower_logo} height="50px"/>Forever & Always</span></a>

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
  )
}

export default Nav
