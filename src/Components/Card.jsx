import React from "react";
import { FaRegEdit, FaRegEye, FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { LiaEdit } from "react-icons/lia";

{/*Note:to convert hex color into tailwind css visit this website: https://hextotailwind.com/ */}

//called from Foreground.jsx
const Card = ({ data, reference,isDrag }) => {
  //Drag docs: https://motion.dev/docs/react-gestures#drag
  return (
    <motion.div
      drag={isDrag}
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative w-55 h-62 flex-shrink-0 bg-zinc-900/90 p-3 text-white rounded-[45px] overflow-hidden"
    >
      {/* bg-zinc-900/10 in this 90 means 90% opacity */}

      {/* dragConstraints={refrence} here reference is basically ref which is linked to the parent component of Card ,
      basically using it will not through the cards out of the bounders of the div which is inside Foreground component, basically not through out of the
      flow of the page */}

      <p className="text-sm text-center">{data?.title}</p>
      <div className="border-[1px] border-zinc-800"></div>
      <p className="text-sm mt-2 text-center font-normal ">{data?.text}</p>

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
        <div
          className={`tag w-full py-0.5 ${
            data?.priority === 0
              ? "bg-red-700"
              : data?.priority === 1
              ? "bg-red-200"
              : data?.priority === 2
              ? "bg-amber-200"
              : data?.priority === 3
              ? "bg-purple-200"
              : data?.priority === 4
              ? "bg-sky-200"
              : "bg-green-600"
          } flex items-center justify-center opacity-50`}
        >
          <h3 className="text-sm text-black font-semibold">View</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
