import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    // <div>
    // <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //   NavBar Component
    //     <NavLink to="/"/>
    //     <NavLink to ="/Signup/"/>
    // </div>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">E & J Authorized Jeep Dealer</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>

            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Inventory
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li className="nav-item">
              <NavLink className="dropdown-item" to="/list/models/">Models List</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="dropdown-item" to="/list/manufacturer/">Manufacturers List</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="dropdown-item" to="/list/automobiles/">Automobiles List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="dropdown-item" to="/create/model/">New Vehicle Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="dropdown-item" to="/create/manufacturer/">New Manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="dropdown-item" to="/create/automobile/">New Automobile</NavLink>
            </li>

          </ul>
        </li>

            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sales
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li className="nav-item">
              <NavLink className="dropdown-item" to="/list/sales/">Sale Records</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="dropdown-item" to="/list/individual/">Individual Records</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="dropdown-item" to="/create/customer/">New Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="dropdown-item" to="/create/sale-person/">New Sale Person</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="dropdown-item" to="/create/sale-record/">New Sale Record</NavLink>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Service
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
              <NavLink className="dropdown-item" to="/list/services/">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="dropdown-item" to="/list/service-history/">Service History</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="dropdown-item" to="/create/service/">New Service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="dropdown-item" to="/create/technician/">New Technician</NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Accounts
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <NavLink className="dropdown-item" to="/accounts/">Employees</NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/accounts/new/">New Employee</NavLink>
            </li>
          </ul>
        </li>
        </ul>
        <img src="https://www.pngplay.com/wp-content/uploads/13/Jeep-Transparent-Images.png" width="70" height="55"/>
        </div>
      </div>
    </nav>
    
  )
}

export default Nav
