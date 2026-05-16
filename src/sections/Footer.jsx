import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#18161a] border-t border-gray-100 dark:border-[#2a2a2a] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xl font-bold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          &lt;BGS&gt;
        </span>

        <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
          Bagas Sakhi Agathan 
        </p>

        <div className="flex gap-4">
          {[
            { icon: <FaGithub size={20} />, href: 'https://github.com/Bagassakhi' },
            { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/bagas-sakhi-49692137b/' },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
