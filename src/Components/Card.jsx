import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

//called from Foreground.jsx
const Card = () => {
  return (
    <div className='relative w-60 h-72 bg-zinc-900/90 px-8 py-10 text-white rounded-[50px] overflow-hidden'>
        {/* bg-zinc-900/10 in this 90 means 90% opacity */}
        <FaRegFileAlt/>
        <p className='text-sm m-5 font-semibold leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 bg-sky-200 w-full h-10 left-0 py-3'></div>
    </div>

  )
}

export default Card