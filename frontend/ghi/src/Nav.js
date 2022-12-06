import React from 'react'
import { NavLink } from 'react-router-dom'
import { isLoggedIn, logout } from './library/auth'

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-secondary"
      id="home-links"
    >
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <NavLink className="navbar-brand" id="home-links" to="/">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav">
          <li className="nav-item navbar-brand active">
            <a className="nav-link" id="home-links" href="/destinations/">
              Destinations<span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item navbar-brand active">
            <a className="nav-link" id="home-links" href="/themes/">
              Themes<span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item navbar-brand active">
            <a className="nav-link" id="home-links" href="/invites/creation/">
              Invitations<span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item navbar-brand active">
            <a className="nav-link" id="home-links" href="/venues/">
              Venues<span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item navbar-brand dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Menu Design
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
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
          {!isLoggedIn() && (
            <div>
              <li className="nav-item navbar-brand active">
                <a className="nav-link" id="home-links" href="/login/">
                  Login<span className="sr-only"></span>
                </a>
              </li>
            </div>
          )}
          <div>
            {isLoggedIn() && (
              <div className="profile-logout-flexbox">
                <a className="nav-link" id="home-links" href="/profile/">
                  Profile
                </a>
                <button
                  onClick={logout}
                  className="nav-link btn"
                  id="home-links logout"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
