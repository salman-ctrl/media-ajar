import React from 'react';
import Navbar from './Navbar';
import bg from '../assets/bg.jpg';
import { FaPlay } from "react-icons/fa";
const Home = () => {
    return (
        <div
            className="h-screen w-screen bg-cover bg-center overflow-hidden flex flex-col"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <Navbar />
            <div className='w-full h-full flex justify-center items-center'>
                <div className=' h-80 relative w-96 bg-amber-600 rounded-2xl shadow-2xl overflow-hidden flex flex-col hover:scale-110 transition-all duration-700'>
                    <img src={bg} alt="" className='h-50 w-full object-cover relative' />
                    <div className='absolutes inset-0 flex justify-center'>
                        <FaPlay />
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Home;
