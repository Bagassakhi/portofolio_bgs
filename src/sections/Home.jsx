import { motion } from "framer-motion";
import { HiDownload, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
const heroImg = "/12410221.jpeg";

const socials = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/Bagassakhi",
    label: "GitHub",
  },
  { icon: <FaLinkedin size={20} />, href: "#", label: "LinkedIn" },
  {
    icon: <FaInstagram size={20} />,
    href: "https://www.instagram.com/bgssakhi/",
    label: "Instagram",
  },
];

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-[#0f0f0f]"
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float pointer-events-none" />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 lg:py-0 grid lg:grid-cols-2 gap-12 items-center">
        {/* ── LEFT: Text ── */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium mb-5"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for work
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent block mt-1">
              Bagas Sakhi Agathan
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-indigo-600 dark:text-indigo-400 font-semibold mb-4"
          >
            Front End & Back End Developer & UI/UX Desain
          </motion.p>

          {/* Desc */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Saya Bagas Sakhi Agathan Dari SMK Wikrama Bogor Saya Dari Jurusan
            Pengembangan Perangkat Lunak Dan GIM (PPLG)
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 bg-linear-to-r from-indigo-500 to-purple-600 text-white px-7 py-3 rounded-2xl font-semibold shadow-lg shadow-indigo-200 dark:shadow-indigo-900 hover:shadow-xl transition-shadow"
            >
              <HiMail size={18} /> Hubungi Saya
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              href="/cv.pdf"
              download="CV_Bagas_Sakhi_Agathan.pdf"
              className="flex items-center gap-2 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 px-7 py-3 rounded-2xl font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
            >
              <HiDownload size={18} /> Download CV
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-3 justify-center lg:justify-start"
          >
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm hover:shadow-md transition-all"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Profile Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-indigo-300 dark:border-indigo-700 opacity-60"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-dashed border-purple-200 dark:border-purple-800 opacity-40"
            />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-400 to-purple-500 blur-2xl opacity-25 scale-110" />

            {/* Photo frame */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-linear-to-br from-indigo-500 to-purple-600 shadow-2xl shadow-indigo-300 dark:shadow-indigo-900">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-[#1a1a1a]">
                <img
                  src={heroImg}
                  alt="Bagas Sakhi Agathan"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating badge — experience */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 top-8 bg-white dark:bg-[#1a1a1a] rounded-2xl px-4 py-2.5 shadow-xl border border-gray-100 dark:border-[#2a2a2a]"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Experience
              </p>
              <p className="text-lg font-extrabold text-indigo-600 dark:text-indigo-400">
                3+ Years
              </p>
            </motion.div>

            {/* Floating badge — projects */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="absolute -left-4 bottom-10 bg-white dark:bg-[#1a1a1a] rounded-2xl px-4 py-2.5 shadow-xl border border-gray-100 dark:border-[#2a2a2a]"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Projects Done
              </p>
              <p className="text-lg font-extrabold text-purple-600 dark:text-purple-400">
                4+
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-linear-to-b from-indigo-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
