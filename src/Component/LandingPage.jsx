import React, { useState, useEffect } from 'react';
import bg from '../assets/background.jpg';
import { GrChapterNext } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const LandingPage = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 700);
    }, []);

    return (
        <div className='relative h-screen w-screen'>
            <img
                src={bg}
                alt=""
                className={`w-screen h-screen transition-all duration-1000 ${loaded ? "blur-0 opacity-100" : "blur-lg opacity-0"
                    }`}
            />

            {/* Tombol dengan Link */}
            <Link to='/home'>
                <motion.button
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className='absolute flex cursor-pointer shadow-2xl hover:scale-110 transition-all duration-700 items-center gap-x-4 rounded-md px-10 py-4 text-2xl right-12 bottom-12 bg-orange-400 text-white hover:bg-amber-500'>
                    Lanjut <GrChapterNext />
                </motion.button>
            </Link>
        </div>
    );
}

export default LandingPage;
