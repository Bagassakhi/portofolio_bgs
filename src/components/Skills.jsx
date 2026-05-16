import React from 'react';
import { 
  FaReact, 
  FaCss3Alt, 
  FaJs, 
  FaHtml5, 
  FaGitAlt
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React JS', icon: FaReact, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-600' },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <Icon className={`text-5xl mx-auto mb-3 ${skill.color}`} />
                <p className="font-semibold text-gray-700">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;