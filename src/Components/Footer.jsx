import React from "react";
import { CiSettings } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { IoLockClosedOutline, IoLockOpenOutline } from "react-icons/io5";
import { SlDocs } from "react-icons/sl";

//called from App.js
const Footer = ({setisDrag,isDrag}) => {

  const handleDrag=(e)=>{
    setisDrag((prev)=>!prev)
  }
  return (
    <footer class="z-10 absolute bottom-0 left-1/2 -translate-x-[50%] w-3xl shadow-sm shadow-zinc-700 mb-5 bg-zinc-800 transition-all duration-[200ms] ease hover:shadow-md ">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <a
          href="https://github.com/muazimmaqbool/mydocs"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 text-sm cursor-pointer text-black font-semibold bg-zinc-400 p-2 rounded-xl transition-all duration-[200ms] ease hover:bg-zinc-300"
        >
          <p>Star on GitHub</p> <FaStar />
        </a>
        <div className="flex items-center font-normal text-zinc-400 text-md gap-5">
          <div className="flex items-center gap-1 cursor-pointer transition-all duration-[300ms] ease hover:text-zinc-100 hover:scale-110">
            <CiSettings />
            Settings
          </div>
          <div onClick={handleDrag} className="flex items-center gap-1 cursor-pointer transition-all duration-[300ms] ease hover:text-zinc-100 hover:scale-110">
            {isDrag?<IoLockClosedOutline />:<IoLockOpenOutline />}
            {isDrag ? "Lock Ui" :"Unlock Ui"}
          </div>
          <div className="flex items-center gap-1 cursor-pointer transition-all duration-[300ms] ease hover:text-zinc-100 hover:scale-110">
            <SlDocs />
            Add Doc
          </div>
          <div className="flex items-center gap-1 cursor-pointer transition-all duration-[300ms] ease hover:text-zinc-100 hover:scale-110">
            <GoTasklist />
            Add Task
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
