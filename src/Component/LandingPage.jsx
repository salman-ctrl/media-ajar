import React, { useState, useEffect } from 'react';
import bg from '../assets/background.jpg';
import { GrChapterNext } from "react-icons/gr";

const LandingPage = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 700); // Delay animasi 500ms
    }, []);

    return (
        <div className='relative h-screen w-screen'>
            <img
                src={bg}
                alt=""
                className={`w-screen h-screen transition-all duration-1000 ${loaded ? "blur-0 opacity-100" : "blur-lg opacity-0"
                    }`}
            />
            <button className={`absolute flex cursor-pointer shadow-2xl hover:scale-110 transition-all duration-700 items-center gap-x-4 rounded-md px-10 py-4 text-2xl right-22 bottom-12 bg-orange-400 text-white hover:bg-amber-500 ${loaded ? "blur-0 opacity-100" : "blur-lg opacity-0"}`}>
                Lanjut <GrChapterNext />
            </button>
        </div>
    );
}

export default LandingPage;
