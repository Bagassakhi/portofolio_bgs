import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import SectionTitle from "../components/SectionTitle";
import { education } from "../data/portfolioData";
import { HiAcademicCap } from "react-icons/hi";
const herojpg = '/logo2.png';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-[#18161a]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="Education" subtitle="Perjalanan pendidikan saya" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-500 to-purple-600 hidden md:block" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <FadeIn key={i} delay={i * 0.15} direction="right">
                <div className="flex gap-6 md:gap-10">
                  {/* Icon */}
                  <div className="hidden md:flex shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-[#1a1a1a] items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-indigo-900 z-10 border border-gray-100 dark:border-[#2a2a2a] p-1">
                    <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] hover:border-indigo-200 dark:hover:border-indigo-700 transition-all shadow-sm hover:shadow-md"
                  >
                    <span className="inline-block text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 px-3 py-1 rounded-full mb-3">
                      {edu.year}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-2">
                      {edu.school}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {edu.desc}
                    </p>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
