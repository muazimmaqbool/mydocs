import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

//called from Foreground.jsx
const Card = ({ data }) => {
  return (
    <div className="relative w-60 h-72 flex-shrink-0 bg-zinc-900/90 px-8 py-10 text-white rounded-[45px] overflow-hidden">
      {/* bg-zinc-900/10 in this 90 means 90% opacity */}
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data?.desc}</p>
      <div className="footer absolute bottom-0  w-full left-0 ">
        <div className="flex items-center justify-between mb-3 py-3 px-8 ">
          <h5>{data?.fileSize}</h5>
          <span className="flex items-center justify-center w-7 h-7 bg-zinc-600 rounded-full">
            {data?.close ? (
              <IoMdClose />
            ) : (
              <LuDownload size="0.7em" color="#fff" />
            )}
          </span>
        </div>
        {data?.tag?.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data?.tag?.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data?.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
