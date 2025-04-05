import React from 'react'
import Card from './Card'

//called from App.jsx
//the cards will come inside this component
const Foreground = () => {
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full">
        {/* bg-sky-800/50 means 50% transparent, 50 means 50% opacity */}
    
        <Card/>
        
    </div>
  )
}

export default Foreground