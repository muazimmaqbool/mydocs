import React from 'react'

//the cards will come inside this component
const Foreground = () => {
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full">
        {/* bg-sky-800/50 means 50% transparent, 50 means 50% opacity */}
    
        {/* bg-zinc-900/10 in this 10 means 10% opacity */}
        <div className='w-60 h-72 bg-zinc-900/10 rounded-[20px]'>

        </div>

    </div>
  )
}

export default Foreground