import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiHome, HiUser, HiLightningBolt, HiAcademicCap,
  HiCode, HiMail, HiMenu, HiX, HiSun, HiMoon, HiSearch, HiCollection,
} from 'react-icons/hi';
import { navLinks } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const icons = {
  home:         <HiHome size={20} />,
  about:        <HiUser size={20} />,
  skills:       <HiLightningBolt size={20} />,
  education:    <HiAcademicCap size={20} />,
  certificates: <HiCollection size={20} />,
  projects:     <HiCode size={20} />,
  contact:      <HiMail size={20} />,
};

// Komponen terpisah agar state tidak di-recreate setiap render
function SidebarContent({ active, onScrollTo, query, setQuery, onSearch, noResult, dark, setDark }) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-gray-200 dark:border-[#2a2a2a]">
        <span className="text-2xl font-bold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          &lt;BGS&gt;
        </span>
      </div>

      {/* Search */}
      <div className="px-4 py-4">
        <form onSubmit={onSearch}>
          <div className={`flex items-center gap-2 rounded-xl px-3 py-2 transition-colors
            ${noResult
              ? 'bg-red-50 dark:bg-red-900/20 ring-1 ring-red-400'
              : 'bg-gray-100 dark:bg-[#1a1a1a]'
            }`}
          >
            <button type="submit" className="text-gray-400 hover:text-indigo-500 transition-colors shrink-0">
              <HiSearch size={16} />
            </button>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari section... (Enter)"
              className="bg-transparent text-sm outline-none w-full text-gray-700 dark:text-gray-300 placeholder-gray-400"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 shrink-0"
              >
                <HiX size={14} />
              </button>
            )}
          </div>
        </form>

        {/* Dropdown hasil pencarian */}
        {query.trim() && (
          <div className="mt-2 rounded-xl overflow-hidden border border-gray-200 dark:border-[#2a2a2a] shadow-lg bg-white dark:bg-[#1a1a1a]">
            {navLinks
              .filter(
                (l) =>
                  l.label.toLowerCase().includes(query.toLowerCase()) ||
                  l.id.toLowerCase().includes(query.toLowerCase())
              )
              .map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => { onScrollTo(l.id); setQuery(''); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <span className="text-indigo-500">{icons[l.id]}</span>
                  {l.label}
                </button>
              ))}
            {navLinks.filter(
              (l) =>
                l.label.toLowerCase().includes(query.toLowerCase()) ||
                l.id.toLowerCase().includes(query.toLowerCase())
            ).length === 0 && (
              <p className="px-4 py-3 text-sm text-gray-400 dark:text-gray-500">
                Tidak ditemukan: "<span className="font-medium text-gray-600 dark:text-gray-300">{query}</span>"
              </p>
            )}
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onScrollTo(link.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
              ${active === link.id
                ? 'bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
          >
            {icons[link.id]}
            {link.label}
          </button>
        ))}
      </nav>

      {/* Dark mode toggle */}
      <div className="px-6 py-5 border-t border-gray-200 dark:border-[#2a2a2a]">
        <button
          onClick={() => setDark(!dark)}
          className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          {dark ? <HiSun size={20} /> : <HiMoon size={20} />}
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const { dark, setDark } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [query, setQuery] = useState('');
  const [noResult, setNoResult] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setOpen(false);
    setQuery('');
    setNoResult(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.toLowerCase().trim();
    if (!q) return;

    const match = navLinks.find(
      (l) => l.label.toLowerCase().includes(q) || l.id.includes(q)
    );

    if (match) {
      scrollTo(match.id);
    } else {
      setNoResult(true);
      setTimeout(() => setNoResult(false), 1500);
    }
  };

  const sharedProps = {
    active,
    onScrollTo: scrollTo,
    query,
    setQuery: (val) => { setQuery(val); setNoResult(false); },
    onSearch: handleSearch,
    noResult,
    dark,
    setDark,
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 bg-white dark:bg-[#0f0f0f] border-r border-gray-200 dark:border-[#2a2a2a] z-40 shadow-sm">
        <SidebarContent {...sharedProps} />
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0f0f0f] border-b border-gray-200 dark:border-[#2a2a2a] px-4 py-3 flex items-center justify-between shadow-sm">
        <span className="text-xl font-bold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          &lt;BGS&gt;
        </span>
        <div className="flex items-center gap-3">
          <button onClick={() => setDark(!dark)} className="text-gray-600 dark:text-gray-400">
            {dark ? <HiSun size={22} /> : <HiMoon size={22} />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-gray-700 dark:text-gray-300">
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/40 z-40"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 h-screen w-72 bg-white dark:bg-[#0f0f0f] z-50 shadow-2xl"
            >
              <SidebarContent {...sharedProps} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
