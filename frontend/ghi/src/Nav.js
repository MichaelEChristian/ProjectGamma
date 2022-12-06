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

function MenuDesignDropdown() {
  return (
    <li className="nav-item dropdown">
      <div
        className="nav-link dropdown-toggle"
        style={{ cursor: 'pointer' }}
        id="menu-design-dropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Menu Design
      </div>
      <div className="dropdown-menu" aria-labelledby="menu-design-dropdown">
        <a className="dropdown-item" href="/menu/all/">
          All
        </a>
        <a className="dropdown-item" href="/guests/">
          Vegan
        </a>
        <a className="dropdown-item" href="/billing/">
          Vegetarian
        </a>
        <a className="dropdown-item" href="/registry/">
          Dairy
        </a>
      </div>
    </li>
  )
}

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <NavItem href="/" text="Home" />
          <NavItem text="Destinations" href="/destinations" />
          <NavItem text="Themes" href="/themes" />
          <NavItem text="Invitations" href="/invites/creation" />
          <NavItem text="Venues" href="/venues" />
          <MenuDesignDropdown />
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
