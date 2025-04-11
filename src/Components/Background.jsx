import React from "react";

//called from App.jsx
const Background = () => {
  return (
    <div className="fixed z-[2] w-full h-screen">
      {/* navigation bar */}
      <div className="absolute top-[5%] w-full flex justify-center text-zinc-500 text-xl font-semibold">
        Documents and Tasks
      </div>

      {/* leading-none: will reduce the line height, tacking-tight will reduce the letter spacing : 
        you can see them on docs of tailwindss just search them there */}
      {/* absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]: (- before translate is minus)
            will make the text in center and it's absolute to outer div it's relative */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tight font-semibold text-zinc-900">
        My Tasks.
      </h1>
    </div>
  );
};

export default Background;
