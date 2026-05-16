import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white text-6xl">👨‍💻</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Saya seorang Web Developer
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Saya memiliki passion dalam membuat website yang tidak hanya 
              indah secara visual tapi juga fungsional dan user-friendly.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dengan pengalaman dalam berbagai teknologi modern, saya siap 
              membantu mewujudkan ide Anda menjadi realitas digital.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Nama:</p>
                <p className="text-gray-600">Ahmad Santoso</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-gray-600">ahmad@email.com</p>
              </div>
              <div>
                <p className="font-semibold">Lokasi:</p>
                <p className="text-gray-600">Jakarta, Indonesia</p>
              </div>
              <div>
                <p className="font-semibold">Pengalaman:</p>
                <p className="text-gray-600">2+ Tahun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;