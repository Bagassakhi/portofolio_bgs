import React, { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan terkirim! Terima kasih.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
            <p className="text-gray-600 mb-8">
              Punya proyek menarik? Jangan ragu untuk menghubungi saya!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FiMail className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">ahmad@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FiPhone className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FiMapPin className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nama Anda"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email Anda"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                required
              />
            </div>
            
            <div>
              <textarea
                rows="5"
                placeholder="Pesan Anda"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition flex items-center justify-center gap-2"
            >
              <FiSend />
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;