import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

//called from Foreground.jsx
const Card = () => {
  return (
    <div className="relative w-60 h-72 bg-zinc-900/90 px-8 py-10 text-white rounded-[50px] overflow-hidden">
      {/* bg-zinc-900/10 in this 90 means 90% opacity */}
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="footer absolute bottom-0 px-8 w-full left-0 py-3">
        <div className="flex items-center justify-between mb-5">
          <h5>.4mb</h5>
          <span className="flex items-center justify-center w-7 h-7 bg-zinc-600 rounded-full">
            <LuDownload size="0.7em" color="#fff"/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
