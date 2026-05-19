import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="navbar">
                <h2 className="logo">LOGO</h2>
                <div className="nav">
                    <ul>
                        <li>
                            <NavLink className={({isActive})=>isActive ? "active-link" : "nav-link"} to="/" id='Link'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=>isActive ? "active-link" : "nav-link"} to="/service" id='Link'>Services</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=>isActive ? "active-link" : "nav-link"} to="/about" id='Link'>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=>isActive ? "active-link" : "nav-link"} to="/contact" id='Link'>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                <h2 className="user">USERNAME</h2>
            </div>
    </>
  )
}

export default Header
