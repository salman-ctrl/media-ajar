import React from 'react'
import bg from '../assets/background.jpg'
import { GrChapterNext } from "react-icons/gr";

const LandingPage = () => {
    return (
        <div>
            <img src={bg} alt="" className='w-screen h-screen' />
            <button>Lanjut <GrChapterNext /></button>
        </div>
    )
}

export default LandingPage
