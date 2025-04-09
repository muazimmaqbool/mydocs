import React from "react";
import Card from "./Card";

//called from App.jsx
//the cards will come inside this component
const Foreground = () => {
  const data = [
    {
      desc: "This is the test description inside the card component",
      fileSize: ".4mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full">
      {/* bg-sky-800/50 means 50% transparent, 50 means 50% opacity */}
      {
        data.map((item,index)=>(
          <Card data={item}/>
        ))
      }
    </div>
  );
};

export default Foreground;
