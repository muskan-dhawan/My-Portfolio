"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const Experience = () => {
  return (
    <section
      id="experience"
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
          <h1 className="Welcome-text text-[13px]">EXPERIENCE &amp; TRAINING</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          My Journey
        </motion.h2>

        <div className="flex flex-col gap-6 w-full">
          {/* Experience 1 */}
          <motion.div
            variants={slideInFromLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-8 hover:border-[#7042f8] transition-all duration-300 w-full"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold text-white">Machine Learning Intern | Skillcraft Technology</h3>
              <p className="text-gray-400 font-medium">Jan 2026 – Feb 2026</p>
            </div>
            <ul className="list-disc ml-5 text-gray-400 flex flex-col gap-2">
              <li>Assisted in data preprocessing, exploratory data analysis (EDA), feature engineering, and model building across multiple machine learning projects.</li>
              <li>Implemented and evaluated regression, clustering, classification, and CNN-based models, including real-time hand gesture recognition, using appropriate performance metrics.</li>
              <li>Enhanced skills in Python and ML libraries, gaining hands-on experience with real-world datasets and end-to-end ML workflows.</li>
            </ul>
            <div className="mt-5">
              <a href="https://drive.google.com/file/d/1VE508G6zLpMzVBBHlXtiwrPPvPfR2jil/view" target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-4 rounded-lg bg-[#2A0E61] hover:bg-[#7042f8] text-white text-sm font-medium transition-all duration-300">
                View Certificate
              </a>
            </div>
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            variants={slideInFromLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-8 hover:border-[#7042f8] transition-all duration-300 w-full"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold text-white">Machine Learning Intern | Saiket Systems</h3>
              <p className="text-gray-400 font-medium">Sep 2025 – Oct 2025</p>
            </div>
            <ul className="list-disc ml-5 text-gray-400 flex flex-col gap-2">
              <li>Assisted in data preprocessing, feature selection, model training, and evaluation for the Customer Churn Prediction project.</li>
              <li>Contributed to developing and optimizing predictive ML models through analytical discussions, applying algorithms, and evaluating performance using Accuracy, Precision, Recall, F1 Score, and ROC-AUC.</li>
              <li>Strengthened problem-solving, model interpretability, and adaptability to real-world AI challenges.</li>
            </ul>
            <div className="mt-5">
              <a href="https://drive.google.com/file/d/1uIidv5DdKZtn-PgvWqtx2AtAMmgpzlVj/view" target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-4 rounded-lg bg-[#2A0E61] hover:bg-[#7042f8] text-white text-sm font-medium transition-all duration-300">
                View Certificate
              </a>
            </div>
          </motion.div>

          {/* Training */}
          <motion.div
            variants={slideInFromLeft(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-8 hover:border-[#7042f8] transition-all duration-300 w-full"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold text-white">Data Structures &amp; Algorithms using C++ | LPU Training</h3>
              <p className="text-gray-400 font-medium">Jun 2025 – Jul 2025</p>
            </div>
            <ul className="list-disc ml-5 text-gray-400 flex flex-col gap-2">
              <li>Gained hands-on experience with Data Structures and Algorithms in C++, applying STL concepts to efficiently manage and manipulate data.</li>
              <li>Learned backend development in C++, including REST API handling, file persistence, JSON processing, and concurrency using mutexes.</li>
              <li>Improved understanding of full-stack integration, API design, problem-solving, and version control using Git and GitHub.</li>
            </ul>
            <div className="mt-5">
              <a href="https://drive.google.com/file/d/1ikU4ZKSfmTK09kL-oNRGSFIXwvGG6r8h/view" target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-4 rounded-lg bg-[#2A0E61] hover:bg-[#7042f8] text-white text-sm font-medium transition-all duration-300">
                View Certificate
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
