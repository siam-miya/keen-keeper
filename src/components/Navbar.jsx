import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
   <nav>
    <div className="container">
        <div className='flex items-center justify-between'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <ul> 
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"timeline"}>Timeline</NavLink>
                </li>
                <li>
                    <NavLink to={"stats"}>Stats</NavLink>
                </li>
            </ul>
        </div>
    </div>
   </nav>
  )
}

export default Navbar
