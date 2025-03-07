import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='h-[10vh] w-screen bg-amber-600 text-white text-2xl shadow-2xl flex'>

            <ul className='flex gap-x-10 w-full justify-end pr-10 items-center'>
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
