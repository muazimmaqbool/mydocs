import React from "react";

//docs of tailwind css: https://tailwindcss.com/docs/installation/using-vite

//called from main.jsx
const App = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      {/* h-screen: height will be size of screen */}
      {/* leading-none: will reduce the line height, tacking-tight will reduce the letter spacing : 
      you can see them on docs of tailwindss just search them there */}
      {/* absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]: (- before translate is minus)
      will make the text in center and it's absolute to outer div it's relative */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tight font-semibold text-zinc-900">
        My Docs.
      </h1>
    </div>
  );
};

export default App;
