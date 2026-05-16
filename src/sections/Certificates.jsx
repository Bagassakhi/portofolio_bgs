import { motion } from "framer-motion";
import { HiExternalLink, HiAcademicCap } from "react-icons/hi";
import FadeIn from "../components/FadeIn";
import SectionTitle from "../components/SectionTitle";
import { certificates } from "../data/portfolioData";

const categoryColors = {
  'Web Development': 'from-indigo-500 to-blue-500',
  'UI/UX Design':    'from-pink-500 to-purple-500',
  'Programming':     'from-emerald-500 to-teal-500',
  'default':         'from-indigo-500 to-purple-600',
};

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Certificates" subtitle="Sertifikat & pencapaian saya" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => {
            const gradient = categoryColors[cert.category] || categoryColors['default'];
            return (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-100 dark:border-[#2a2a2a] hover:border-indigo-300 dark:hover:border-indigo-600 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Thumbnail / Placeholder */}
                  <div className={`relative h-44 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-white/80">
                        <HiAcademicCap size={48} />
                        <span className="text-xs font-medium tracking-wide uppercase opacity-70">Certificate</span>
                      </div>
                    )}
                    {/* Category badge */}
                    <span className="absolute top-3 left-3 text-xs font-semibold bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                      {cert.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
                      {cert.date}
                    </p>

                    {cert.link && cert.link !== '#' && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                      >
                        <HiExternalLink size={14} /> Lihat Sertifikat
                      </a>
                    )}
                  </div>

                  {/* Glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-2xl`} />
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
