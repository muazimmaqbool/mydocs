import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

//called from Foreground.jsx
const Card = ({ data, reference }) => {
  
  //Drag docs: https://motion.dev/docs/react-gestures#drag
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1}}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative w-60 h-72 flex-shrink-0 bg-zinc-900/90 p-3 text-white rounded-[45px] overflow-hidden"
    >
      {/* bg-zinc-900/10 in this 90 means 90% opacity */}

      {/* dragConstraints={refrence} here reference is basically ref which is linked to the parent component of Card ,
      basically using it will not through the cards out of the bounders of the div which is inside Foreground component, basically not through out of the
      flow of the page */}

      <p className="text-sm text-center">Doc Title</p>
      <div className="border-[1px] border-zinc-800"></div>
      <p className="text-sm mt-2 text-center font-semibold leading-tight">{data?.desc}</p>
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
    </motion.div>
  );
};

export default Card;
