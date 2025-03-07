import React, { useState } from 'react';
import Navbar from './Navbar';
import bg from '../assets/bg.jpg';
import { FaPlay } from "react-icons/fa";
import { motion } from 'framer-motion';
import { MdOutlineClose } from "react-icons/md";

const Home = () => {
    const [frame, setFrame] = useState(false);

    return (
        <div
            className="h-screen relative w-screen bg-cover bg-center flex flex-col"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <Navbar />

            {/* Card Warisan Budaya */}
            <div className='w-full h-full flex justify-center items-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className='h-80 relative w-96 bg-amber-600 rounded-2xl shadow-2xl overflow-hidden flex flex-col hover:scale-110 transition-all duration-700 cursor-pointer'
                    onClick={() => setFrame(true)}
                >
                    <img src={bg} alt="Background" className='h-50 w-full object-cover relative' />
                    <div className='inset-0 absolute flex opacity-0 hover:opacity-100 h-full transition-all duration-700 w-full justify-center items-center'>
                        <div className='h-12 w-12 mb-20 bg-black flex justify-center items-center rounded-full'>
                            <FaPlay className='text-lg text-white' />
                        </div>
                    </div>
                    <div className='p-6 flex flex-col items-center text-center'>
                        <h2 className='text-lg font-semibold font-[Poppins] text-white'>Mari Mengenal Warisan Budaya di Sekitar Kita</h2>
                    </div>
                </motion.div>
            </div>

            {/* Video YouTube (Posisi Absolute) */}
            {frame && (
                <motion.div
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}

                    className="w-[700px] h-[500px] absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-4 flex justify-between items-center border-b">
                        <h2 className="text-lg font-semibold font-[Poppins]">Mengenal Warisan Budaya</h2>
                        <button
                            onClick={() => setFrame(false)}
                            className="text-amber-500 font-bold text-3xl cursor-pointer  transition-all"
                        >
                            <MdOutlineClose />
                        </button>
                    </div>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Mengenal Warisan Budaya"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-2"
                    />
                </motion.div>
            )}
        </div>
    );
}

export default Home;
