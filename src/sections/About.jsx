import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import SectionTitle from "../components/SectionTitle";
import { HiCode, HiLightningBolt, HiHeart } from "react-icons/hi";
const heroImg = "/12410221.jpeg";

const stats = [
  { label: "Projects", value: "4+" },
  { label: "Pengalaman", value: "2 Thn+" },
  { label: "Klien", value: "-" },
  { label: "Kopi/hari", value: "∞" },
];

const highlights = [
  {
    icon: <HiCode size={22} />,
    title: "Clean Code",
    desc: "Menulis kode yang mudah dibaca dan dipelihara.",
  },
  {
    icon: <HiLightningBolt size={22} />,
    title: "Fast Learner",
    desc: "Cepat beradaptasi dengan teknologi baru.",
  },
  {
    icon: <HiHeart size={22} />,
    title: "Passionate",
    desc: "Bersemangat membangun produk yang berdampak.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#18161a]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="About Me" subtitle="Kenali saya lebih dekat" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar side */}
          <FadeIn direction="right">
            <div className="relative flex justify-center">
              <div className="relative w-72 h-72">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500 to-purple-600 rotate-6 opacity-20" />
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500 to-purple-600 -rotate-3 opacity-10" />
                {/* Avatar */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200 dark:shadow-indigo-900 ring-4 ring-indigo-500/30">
                  <img
                    src="/12410221.jpeg"
                    alt="Bagas Sakhi Agathan"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text side */}
          <div>
            <FadeIn delay={0.1}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Frondend & Frontend developer di Indonesia
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Saya adalah seorang progremer dengan pengalaman 2+ tahun
                membangun aplikasi web modern. Saya menyukai tantangan teknis
                dan selalu berusaha memberikan solusi terbaik untuk setiap
                proyek.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Ketika tidak coding, saya suka berolah raga dan mengikuti
                latihan beladiri dan menikmati secangkir kopi sambil
                mendengarkan musik.
              </p>
            </FadeIn>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((h, i) => (
                <FadeIn key={i} delay={0.2 + i * 0.1}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-[#1a1a1a] hover:bg-indigo-50 dark:hover:bg-[#2a2a2a] transition-colors border border-gray-100 dark:border-[#2a2a2a]">
                    <div className="p-2 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 text-white shrink-0">
                      {h.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {h.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-linear-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 border border-indigo-100 dark:border-[#2a2a2a]"
              >
                <p className="text-4xl font-extrabold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 font-medium">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
