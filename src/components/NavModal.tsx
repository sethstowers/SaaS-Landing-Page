import React from "react";
import { IoIosClose } from "react-icons/io";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import { motion } from "framer-motion";

const NavModal = ({ navModalOpen, setNavModalOpen }) => {
  return (
    <motion.div
    key={navModalOpen}

      className={` fixed top-0 bottom-0 right-0  w-full h-screen bg-black text-white z-50 transition-all duration-500  ${
        navModalOpen ? "" : "hidden"
      }`}
    >
         <motion.div className=" absolute right-0"
       animate={{
        opacity: [0, 1],
      }}
      transition={{ duration: 2, delay: 0.8 }}
      >
      <IoIosClose
        onClick={() => setNavModalOpen(false)}
        className="text-[60px]"
      />
      </motion.div>

      <motion.div 
       animate={{
        opacity: [0, 1],
      }}
      transition={{ duration: 2, delay: 0.8 }}
      >
      <Image
        src={Logo}
        alt="SaaS Logo"
        height={60}
        width={60}
        className="absolute left-1/2 translate-x-[-50%] top-7"
      />
      </motion.div>



      <motion.ul  className="flex flex-col items-center mt-[128px] gap-5">
        <motion.li
          animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 2, delay: 0 }}
          className="text-2xl font-medium"
        >
          About
        </motion.li>
        <motion.li 
        animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 2, delay: 0.1 }}
          className="text-2xl font-medium">Features</motion.li>
        <motion.li 
        animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 2, delay: 0.2 }}
        className="text-2xl font-medium">Customers</motion.li>
        <motion.li
        animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 2, delay: 0.3 }}
           className="text-2xl font-medium">Updates</motion.li>
        <motion.li 
          animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 2, delay: 0.4 }}
        className="text-2xl font-medium">Help</motion.li>
      </motion.ul>
      <div className="flex justify-center mt-8">
        <motion.button  
        animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 2, delay: 0.6 }}
          className="btn bg-white text-black text-xl">
          Get for free
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NavModal;
