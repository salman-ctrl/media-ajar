import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}

            className='h-[10vh] w-screen items-center bg-gray-500 text-white text-xl shadow-2xl flex justify-between'>
            <div className='flex items-center w-[453px] font-[Poppins] space-x-4 ml-16'>
                <img src={logo} alt="logo unja" className='w-16 h-16' />
                <p>Universitas Negeri Jambi</p>
            </div>



            <motion.ul
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 4 }}
                className='flex gap-x-10 w-full justify-end pr-16 items-center font-[Poppins]'>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/'>Landing Page</Link>
                </li>
            </motion.ul>
        </motion.div >
    )
}

export default Navbar
