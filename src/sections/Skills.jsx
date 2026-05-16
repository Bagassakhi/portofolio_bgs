import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/portfolioData';
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt,
  FaLaravel,
} from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiFlutter, SiLaravel } from 'react-icons/si';

const techIcons = [
  { icon: <FaReact size={36} />, name: 'React', color: '#61DAFB' },
  { icon: <SiJavascript size={36} />, name: 'JavaScript', color: '#F7DF1E' },
  // { icon: <SiTypescript size={36} />, name: 'TypeScript', color: '#3178C6' },
  { icon: <SiTailwindcss size={36} />, name: 'Tailwind', color: '#38BDF8' },
  // { icon: <FaNodeJs size={36} />, name: 'Node.js', color: '#68A063' },
  // { icon: <FaPython size={36} />, name: 'Python', color: '#3776AB' },
  { icon: <SiMongodb size={36} />, name: 'MongoDB', color: '#47A248' },
  // { icon: <FaGitAlt size={36} />, name: 'Git', color: '#F05032' },
  { icon: <FaHtml5 size={36} />, name: 'HTML5', color: '#E34F26' },
  { icon: <FaCss3Alt size={36} />, name: 'CSS3', color: '#1572B6' },
  { icon: <SiFlutter size={36} />, name: 'Flutter', color: '#54C5F8' },
  { icon: <FaLaravel sieze={36} alt="Laravel" style={{ width: 36, height: 36, objectFit: 'contain' }} />, name: 'Laravel', color: '#FF2D20' },
];

function ProgressBar({ skill, index }) {
  return (
    <FadeIn delay={index * 0.08}>
      <div className="mb-5">
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
        </div>
        <div className="h-2.5 bg-gray-200 dark:bg-[#222222] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, #6366f1, ${skill.color})` }}
          />
        </div>
      </div>
    </FadeIn>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Skills" subtitle="Teknologi yang saya kuasai" />

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <FadeIn>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Proficiency Level</h3>
            </FadeIn>
            {skills.map((skill, i) => (
              <ProgressBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          <FadeIn direction="left" delay={0.2}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Tech Stack</h3>
            <div className="grid grid-cols-5 gap-4">
              {techIcons.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md transition-shadow cursor-default"
                >
                  <span style={{ color: t.color }}>{t.icon}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-medium text-center">{t.name}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
