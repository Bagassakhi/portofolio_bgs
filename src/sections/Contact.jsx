import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import SectionTitle from '../components/SectionTitle';
import { HiMail, HiLocationMarker, HiPhone, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactInfo = [
  { icon: <HiMail size={22} />, label: 'Email', value: 'bagassakhi8@gmailcom' },
  { icon: <HiPhone size={22} />, label: 'Phone', value: '082124409283' },
  { icon: <HiLocationMarker size={22} />, label: 'Location', value: 'Bogor, Indonesia' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Contact" subtitle="Mari berkolaborasi bersama" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <FadeIn direction="right">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Punya proyek menarik?
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Saya selalu terbuka untuk diskusi tentang proyek baru, peluang kreatif,
                atau kesempatan untuk menjadi bagian dari visi Anda.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((c, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">{c.label}</p>
                      <p className="text-gray-800 dark:text-gray-200 font-semibold">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                {[
                  { icon: <FaGithub size={22} />, href: 'https://github.com/Bagassakhi' },
                  { icon: <FaLinkedin size={22} />, href: 'https://www.linkedin.com/in/bagas-sakhi-49692137b/' },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="left" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: 'name', label: 'Nama', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Ceritakan proyek Anda..."
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-indigo-500 to-purple-600 text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-indigo-200 dark:shadow-indigo-900 hover:shadow-xl transition-shadow"
              >
                <HiPaperAirplane size={20} />
                {sent ? 'Pesan Terkirim!' : 'Kirim Pesan'}
              </motion.button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 dark:text-green-400 font-medium text-sm"
                >
                  Terima kasih! Saya akan segera menghubungi Anda.
                </motion.p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
