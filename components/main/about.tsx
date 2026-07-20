"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center px-6 md:px-20 py-20 w-full z-[20]"
    >
      <div className="w-full max-w-[1100px] flex flex-col gap-6">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">ABOUT ME</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Who I Am
        </motion.h2>

        <motion.div
          variants={slideInFromLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 md:p-8 hover:border-[#7042f8] transition-all duration-300"
        >
          <p className="text-gray-400 text-lg leading-[1.8] mb-6">
            I'm a Computer Science student who loves observing and learning new things. I have a strong foundation in Data Structures & Algorithms, Machine Learning, and Backend Development. I love building efficient, scalable solutions and exploring the deep technical concepts that power modern software systems.
          </p>
          <p className="text-gray-400 text-lg leading-[1.8] mb-6">
            Currently, I'm deeply exploring AI technologies, building deep learning models like Conditional DDPMs from scratch, and containerizing backend architectures. My journey involves learning the "why" behind technology from algorithmic efficiency to deploying machine learning models into production.
          </p>
          <p className="text-gray-400 text-lg leading-[1.8]">
            I enjoy solving complex algorithmic problems (500+ on LeetCode), implementing cutting-edge ML models, and designing robust backend systems. I'm a quick learner who thrives in challenging environments and stays updated with emerging technologies in AI and Backend engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
