import React, { useState } from "react";
import Background from "./Components/Background";
import Foreground from "./Components/Foreground";
import Footer from "./Components/Footer";

//docs of tailwind css: https://tailwindcss.com/docs/installation/using-vite

//called from main.jsx
const App = () => {
  const [isDrag, setisDrag] = useState(true);
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      {/* h-screen: height will be size of screen */}
      <Background />
      <Foreground isDrag={isDrag} />
      <Footer setisDrag={setisDrag} isDrag={isDrag} />
    </div>
  );
};

export default App;
