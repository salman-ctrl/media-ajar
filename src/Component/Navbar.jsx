import React from 'react'
import { Link } from 'react-dom'

const Navbar = () => {
    return (
        <div className='h-[10vh] w-screen bg-amber-400'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/landingPage'>Landing Page</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
