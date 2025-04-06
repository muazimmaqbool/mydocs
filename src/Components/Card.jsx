import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

//called from Foreground.jsx
const Card = () => {
  return (
    <div className='w-60 h-72 bg-zinc-900/10 p-5 text-white rounded-[20px]'>
        {/* bg-zinc-900/10 in this 10 means 10% opacity */}
        <FaRegFileAlt/>
    </div>

  )
}

export default Card