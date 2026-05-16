import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      desc: 'Platform belanja online modern dengan fitur lengkap',
      tech: ['React', 'Tailwind', 'Node.js'],
      image: 'https://picsum.photos/id/20/400/250',
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Website',
      desc: 'Website portfolio modern dengan animasi menarik',
      tech: ['React', 'Tailwind', 'Framer'],
      image: '/laravel.png',
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      desc: 'Aplikasi manajemen tugas untuk tim',
      tech: ['React', 'Redux', 'Tailwind'],
      image: 'https://picsum.photos/id/30/400/250',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = '/laravel.png';
                }}
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-600 hover:text-primary transition">
                    <FiGithub className="text-xl" />
                  </a>
                  <a href={project.demo} className="text-gray-600 hover:text-primary transition">
                    <FiExternalLink className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;