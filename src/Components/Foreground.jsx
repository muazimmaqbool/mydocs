import React, { useRef } from "react";
import Card from "./Card";

//called from App.jsx
//the cards will come inside this component
const Foreground = () => {
  const data = [
    {
      title:"Fix this bug",
      text: "This is the test description inside the card component",
      priority:0,
    },
    {
      title:"Workout Schedule",
      text: "This is the test description inside the card component",
      priority:1,
    },
    {
      title:"Learning",
      text: "This is the test description inside the card component",
      priority:3,
    },
  ];
  const ref=useRef(null) //this ref will be used as a boundary in the Card component for dragging
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10">
      {/* bg-sky-800/50 means 50% transparent, 50 means 50% opacity */}
      {
        data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))
      }
    </div>
  );
};

export default Foreground;
