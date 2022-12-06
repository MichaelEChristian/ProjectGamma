import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" id="navbar">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <NavLink className="navbar-brand" id="home-links" to="/">Home</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" id="home-links" href="/destinations/">Destinations<span className="sr-only"></span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" id="home-links" href="/themes/">Themes<span className="sr-only"></span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" id="home-links" href="/invites/creation/">Invitations<span className="sr-only"></span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" id="home-links" href="/venues/">Venues<span className="sr-only"></span></a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu Design
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/menu/all/">All</a>
                    <a className="dropdown-item" href="/guests/">Vegan</a>
                    <a className="dropdown-item" href="/billing/">Vegetarian</a>
                    <a className="dropdown-item" href="/registry/">Dairy</a>
                </div>
            </li>
            <li className="nav-item active">
                <a className="nav-link" id="home-links" href="/login/">Login<span className="sr-only"></span></a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Profile
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <NavLink className="dropdown-item" to="/profile/dashboard/">My plans</NavLink>
                    <a className="dropdown-item" href="/guests/">Guest List</a>
                    <a className="dropdown-item" href="/billing/">Billing</a>
                    <a className="dropdown-item" href="/registry/">Registry</a>
                </div>
            </li>

        </ul>
    </div>
</nav>
  )
}

export default Nav
