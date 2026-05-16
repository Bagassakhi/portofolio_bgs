import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ahmad
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Web Developer & Designer
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Saya membuat website yang modern, responsif, dan menarik
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-10">
            <a href="#" className="text-2xl text-gray-600 hover:text-primary transition">
              <FiGithub />
            </a>
            <a href="#" className="text-2xl text-gray-600 hover:text-primary transition">
              <FiLinkedin />
            </a>
            <a href="#" className="text-2xl text-gray-600 hover:text-primary transition">
              <FiMail />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition shadow-lg hover:shadow-xl"
            >
              Hire Me
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition">
              Download CV
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <FiArrowDown className="text-2xl text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;