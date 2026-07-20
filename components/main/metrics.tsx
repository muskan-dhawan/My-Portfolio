"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { SiLeetcode, SiGeeksforgeeks, SiGithub } from "react-icons/si";
import Link from "next/link";

export const Metrics = () => {
  return (
    <section
      id="metrics"
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
          <h1 className="Welcome-text text-[13px]">CODING METRICS</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Multi-Platform Problem Solving
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LeetCode Card */}
          <motion.div
            variants={slideInFromLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link 
              href="https://leetcode.com/u/aH2tULPVM1/"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#ffa116] transition-all duration-300 flex flex-col gap-4 cursor-pointer"
            >
            <div className="flex items-center gap-3">
              <SiLeetcode className="text-[#ffa116] w-8 h-8" />
              <h3 className="text-white text-xl font-bold">LeetCode</h3>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                703
              </h1>
              <p className="text-gray-400">Total Solved</p>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
              <div className="flex justify-between"><span className="text-[#00b8a3]">Easy</span><span className="text-white font-medium">227</span></div>
              <div className="flex justify-between"><span className="text-[#ffc01e]">Medium</span><span className="text-white font-medium">363</span></div>
              <div className="flex justify-between"><span className="text-[#ff375f]">Hard</span><span className="text-white font-medium">113</span></div>
            </div>
            <div className="mt-auto pt-4 border-t border-[#2A0E61] flex justify-between text-sm">
              <span className="text-gray-400">Contest Rating: <span className="text-white font-medium">1,396</span></span>
              <span className="text-gray-400">Badges: <span className="text-white font-medium">8</span></span>
            </div>
            </Link>
          </motion.div>

          {/* GFG Card */}
          <motion.div
            variants={slideInFromLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="https://www.geeksforgeeks.org/user/muskandhacq6d/"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#2f8d46] transition-all duration-300 flex flex-col gap-4 cursor-pointer"
            >
            <div className="flex items-center gap-3">
              <SiGeeksforgeeks className="text-[#2f8d46] w-8 h-8" />
              <h3 className="text-white text-xl font-bold">GeeksForGeeks</h3>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                1209
              </h1>
              <p className="text-gray-400">Coding Score</p>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">Problems Solved</span><span className="text-white font-medium">307</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Max Streak</span><span className="text-white font-medium">44 Days</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Institute Rank</span><span className="text-white font-medium">405</span></div>
            </div>
            </Link>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            variants={slideInFromLeft(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="https://github.com/muskan-dhawan"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-white transition-all duration-300 flex flex-col gap-4 cursor-pointer"
            >
            <div className="flex items-center gap-3">
              <SiGithub className="text-white w-8 h-8" />
              <h3 className="text-white text-xl font-bold">GitHub</h3>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold text-white">
                511
              </h1>
              <p className="text-gray-400">Contributions (Past Year)</p>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm text-gray-300">
              <p>Consistently writing code, building projects, and pushing to repositories.</p>
              <p className="mt-2 text-[#b49bff]">700+ total problems solved across platforms.</p>
            </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
