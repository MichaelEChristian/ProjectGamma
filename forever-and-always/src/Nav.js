import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <nav>
      NavBar Component
        <NavLink to="/"/>
        <NavLink to ="/Signup/"/>
    </nav>
  )
}

export default Nav
