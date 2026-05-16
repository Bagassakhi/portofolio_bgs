import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/portfolioData';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ project, index }) {
  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group rounded-3xl overflow-hidden bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] shadow-sm hover:shadow-2xl hover:shadow-indigo-100 dark:hover:shadow-indigo-900/30 transition-all duration-300"
      >
        {/* Card header gradient */}
        <div className={`h-44 bg-linear-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/30" />
            <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/20" />
          </div>
            {project.image
            ? <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            : <HiCode size={56} className="text-white/80" />
          }
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {project.desc}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <motion.a
              href={project.demo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-sm font-semibold text-white bg-linear-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-xl hover:shadow-lg hover:shadow-indigo-200 dark:hover:shadow-indigo-900 transition-shadow"
            >
              <HiExternalLink size={16} /> Demo
            </motion.a>
            <motion.a
              href={project.repo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 px-4 py-2 rounded-xl hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaGithub size={16} /> Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#18161a]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Projects" subtitle="Beberapa karya terbaik saya" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
