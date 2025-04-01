import React from 'react'

//docs of tailwind css: https://tailwindcss.com/docs/installation/using-vite

//called from main.jsx
const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-800'>
      {/* h-screen: height will be size of screen */}
      {/* leading-none: will reduce the line height, tacking-tight will reduce the letter spacing : 
      you can see them on docs of tailwindss just search them there */}
      <h1 className='text-[13vw] leading-none tracking-tight'>My Docs</h1>
    </div>
  )
}

export default App