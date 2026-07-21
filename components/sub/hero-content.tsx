"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            AI / ML Engineer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Muskan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Dhawan
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Not at my peak. Not even close. Leveling up.
          <br /><br />
          Transforming curiosity into expertise through Artificial Intelligence, Deep Learning, scalable backend systems, and solving <strong className="text-white">700+ DSA problems</strong>.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4"
        >
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            View My Work
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative rounded-full p-[4px] bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_40px_rgba(112,66,248,0.5)]">
          <Image
            src="https://github.com/muskan-dhawan.png"
            alt="Profile Picture"
            height={400}
            width={400}
            draggable={false}
            className="rounded-full object-cover select-none bg-[#030014] aspect-square"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
