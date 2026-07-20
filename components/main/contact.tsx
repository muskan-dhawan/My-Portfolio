"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export const Contact = () => {
  return (
    <section
      id="contact"
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
          <h1 className="Welcome-text text-[13px]">GET IN TOUCH</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Let's Connect
        </motion.h2>

        <motion.div
          variants={slideInFromLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-8 hover:border-[#7042f8] transition-all duration-300"
        >
          <p className="text-gray-400 text-lg leading-[1.8] mb-8">
            I'm actively exploring AI, DSA, and backend system design. Open to discussing exciting projects, collaborations, and learning opportunities. Let's connect!
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <a
              href="https://github.com/muskan-dhawan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 px-6 rounded-lg border border-[#2A0E61] hover:border-[#7042f8] bg-[#030014] text-white transition-all hover:-translate-y-1"
            >
              <RxGithubLogo className="w-6 h-6" />
              <span className="font-medium">GitHub</span>
            </a>
            
            <a
              href="https://linkedin.com/in/muskan-dhawan04/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 px-6 rounded-lg border border-[#2A0E61] hover:border-[#7042f8] bg-[#030014] text-white transition-all hover:-translate-y-1"
            >
              <RxLinkedinLogo className="w-6 h-6" />
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a
              href="mailto:muskan.dhawan2023@gmail.com"
              className="flex items-center gap-3 py-3 px-6 rounded-lg border border-[#2A0E61] hover:border-[#7042f8] bg-[#030014] text-white transition-all hover:-translate-y-1"
            >
              <span className="text-xl">📧</span>
              <span className="font-medium">Email Me</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
