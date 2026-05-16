import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    setActive(id);
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img src="/logo1.png" alt="Logo 1" className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <img src="/logo2.png" alt="Logo 2" className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <img src="/logo.3.png" alt="Logo 3" className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === item.id
                    ? 'text-white bg-gradient-to-r from-primary to-secondary shadow-md'
                    : 'text-gray-600 hover:text-primary hover:bg-primary/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/10 transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-3 border-t border-gray-100 flex flex-col gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === item.id
                    ? 'text-white bg-gradient-to-r from-primary to-secondary'
                    : 'text-gray-600 hover:text-primary hover:bg-primary/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;