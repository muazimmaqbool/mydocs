import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

//called from Foreground.jsx
const Card = () => {
  return (
    <div className='relative w-60 h-72 bg-zinc-900/90 p-5 text-white rounded-[20px]'>
        {/* bg-zinc-900/10 in this 90 means 90% opacity */}
        <FaRegFileAlt/>
        <p className='text-sm m-5 font-semibold leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>

  )
}

export default Card