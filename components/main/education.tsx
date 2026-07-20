"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center px-6 md:px-20 py-20 w-full"
    >
      <div className="w-full max-w-[900px] flex flex-col gap-6 z-[20]">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">EDUCATION</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 md:p-8 hover:border-[#7042f8] transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-white font-semibold text-[20px]">
                Bachelor of Technology in Computer Science
              </h3>
              <p className="text-gray-400 text-[15px] mt-1">
                Lovely Professional University, Punjab, India
              </p>
            </div>
            <div className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b]">
              <span className="Welcome-text text-[13px] font-semibold">
                CGPA: 6.82
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-[14px] mb-2">Aug 2023 - Present</p>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 md:p-8 hover:border-[#7042f8] transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-white font-semibold text-[20px]">
                Intermediate (12th Grade)
              </h3>
              <p className="text-gray-400 text-[15px] mt-1">
                Rajkamal Saraswati Vidya Mandir, Dhanbad, Jharkhand
              </p>
            </div>
            <div className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b]">
              <span className="Welcome-text text-[13px] font-semibold">
                Score: 81%
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-[14px] mb-2">Mar 2021 - Mar 2023</p>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 md:p-8 hover:border-[#7042f8] transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-white font-semibold text-[20px]">
                Matriculation (10th Grade)
              </h3>
              <p className="text-gray-400 text-[15px] mt-1">
                De Nobili School C.M.R.I., Dhanbad, Jharkhand
              </p>
            </div>
            <div className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b]">
              <span className="Welcome-text text-[13px] font-semibold">
                Score: 90%
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-[14px] mb-2">Mar 2020 - Mar 2021</p>
        </motion.div>
      </div>
    </section>
  );
};
