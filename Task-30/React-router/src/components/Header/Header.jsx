import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='bg-gray-400 flex justify-evenly h-20 items-center list-none fixed w-full  top-0'>
                <div>
                    <NavLink to="/dashboard" className={({isActive}) => `cursor-pointer ${isActive ? "text-white" : "text-black-400"}`}>Dashboard</NavLink>
                </div>
                <div className='flex gap-20 '>
                    <NavLink to='/Home'
                    className={({isActive}) => `cursor-pointer ${isActive ? "text-white" : "text-black-400"}`}>Home</NavLink>
                    <NavLink to="/login"
                    className={({isActive}) => `cursor-pointer ${isActive ? "text-white" : "text-black-400"}`}>Login</NavLink>
                    <NavLink to="/signup"
                    className={({isActive}) => `cursor-pointer ${isActive ? "text-white" : "text-black-400"}`}>Signup</NavLink>
                </div>
            </div>


        </>
    )
}

export default Header
