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
                <div className='h-80 w-96 bg-amber-600 rounded-2xl shadow-2xl overflow-hidden flex flex-col hover:scale-110 transition-all duration-700'>
                    <img src={bg} alt="" className='h-50 w-full object-cover relative' />
                    <p className='absolutes m-auto'><FaPlay />
                    </p>
                    <div className='p-6 flex flex-col items-center text-center'>
                        <h2 className='text-lg font-semibold text-white'>Mari Mengenal Warisan Budaya di Sekitar Kita</h2>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
