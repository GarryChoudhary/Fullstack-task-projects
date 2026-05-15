import React from 'react'
import { Outlet } from 'react-router-dom'
import Payment from '../components/Payment'
import Home from '../components/Home'

function Layout() {
    return (
        <>
            <div>
                <nav>
                    <div className="navbar">
                        <div className="logo">
                            <img src="https://plus.unsplash.com/premium_photo-1673326679548-962d2fe77423?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXMlMjBsb2dvfGVufDB8fDB8fHww" alt="" />
                        </div>
                        <div className="navbar-content">
                            <ul>
                                <li>Home</li>
                                <li>categories</li>
                                <li>About-us</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet/>
        </>
    )
}

export default Layout
