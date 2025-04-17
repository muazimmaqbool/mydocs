import React from "react";
import { FaRegEdit, FaRegEye, FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { LiaEdit } from "react-icons/lia";

//called from Foreground.jsx
const Card = ({ data, reference }) => {
  //Drag docs: https://motion.dev/docs/react-gestures#drag
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
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
      <p className="text-sm mt-2 text-center font-normal ">{data?.desc}</p>

      <div className="footer absolute bottom-0  w-full left-0 ">
        <div className="border-[1px] border-zinc-800"></div>
        <div className="flex items-center justify-between mb-2 mt-1  px-5 ">
          <span className="flex items-center justify-center">
            <MdDeleteOutline fontSize={"20px"} />
          </span>
          <span className="flex items-center justify-center">
            <LiaEdit fontSize={"20px"} />
          </span>
        </div>
        {data?.tag?.isOpen && (
          <div
            className={`tag w-full py-1 ${
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
