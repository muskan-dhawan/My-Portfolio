"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { slideInFromTop, slideInFromLeft } from "@/lib/motion";
import Link from "next/link";

export const Achievements = () => {
  return (
    <section
      id="achievements"
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
          <h1 className="Welcome-text text-[13px]">ACHIEVEMENTS & CERTIFICATIONS</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Milestones & Recognition
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          
          {/* HackerRank Card */}
          <motion.div
            variants={slideInFromLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            <Link 
              href="https://www.hackerrank.com/muskan_dhawan201"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#00EA64] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,234,100,0.15)] hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-white font-semibold text-[18px] mb-2">HackerRank 5-Star Coder</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#00EA64]/10 text-[#00EA64] rounded-full text-xs font-medium border border-[#00EA64]/20">Problem Solving</span>
                <span className="px-3 py-1 bg-[#00EA64]/10 text-[#00EA64] rounded-full text-xs font-medium border border-[#00EA64]/20">C++</span>
                <span className="px-3 py-1 bg-[#00EA64]/10 text-[#00EA64] rounded-full text-xs font-medium border border-[#00EA64]/20">Java</span>
                <span className="px-3 py-1 bg-[#00EA64]/10 text-[#00EA64] rounded-full text-xs font-medium border border-[#00EA64]/20">Python</span>
              </div>
              <p className="text-gray-400 text-[14px] leading-[1.7] mb-4">
                Achieved the highest 5-star rating across 4 major domains, showcasing elite mastery in data structures, algorithms, and multi-language proficiency.
              </p>
            </Link>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            variants={slideInFromLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#7042f8] transition-all duration-300 hover:shadow-[0_0_30px_rgba(112,66,248,0.15)] hover:-translate-y-1">
              <div className="text-3xl mb-3">📜</div>
              <h3 className="text-white font-semibold text-[18px] mb-2">Certifications & Assessment</h3>
              <ul className="text-gray-400 text-[14px] leading-[1.7] mb-4 space-y-2 list-disc ml-4">
                <li><strong className="text-white">Software Engineer Intern</strong> - HackerRank</li>
                <li><strong className="text-white">Problem Solving (Intermediate)</strong> - HackerRank</li>
                <li><strong className="text-white">REST API (Intermediate)</strong> - HackerRank</li>
                <li><strong className="text-white">Oracle Data Platform Certified Foundations Associate</strong></li>
              </ul>
              <div className="text-[12px] text-gray-500 font-medium tracking-wide border-t border-[#2A0E61] pt-3 mt-auto">
                Verified Skills & Knowledge
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
