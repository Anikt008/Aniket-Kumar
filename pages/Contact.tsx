import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-root">
      <Helmet>
        <title>Contact | Hire a Website Designer</title>
        <meta name="description" content="Get in touch with Aniket Kumar to discuss your next web design project." />
      </Helmet>

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8 text-gray-900">Get in Touch</h1>
            <p className="text-gray-500 leading-relaxed font-medium text-lg mb-12">
              Ready to start your next project or have questions? I'm here to help you build a professional presence.
            </p>

            <div className="space-y-10">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4">Email</h4>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4">WhatsApp</h4>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  {CONTACT_INFO.whatsapp}
                </a>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4">Location</h4>
                <p className="text-xl font-bold text-gray-900">{CONTACT_INFO.location}</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Send a Message</h2>
            {submitted ? (
              <div className="bg-gray-50 p-10 text-center border border-gray-100">
                <p className="text-gray-900 font-bold text-lg uppercase tracking-widest">Message Sent</p>
                <p className="text-gray-400 mt-2 text-sm font-medium">I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-900 font-medium outline-none focus:border-gray-900 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Email</label>
                  <input
                    required
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-900 font-medium outline-none focus:border-gray-900 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Message</label>
                  <textarea
                    required
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-900 font-medium outline-none focus:border-gray-900 transition-all resize-none"
                  ></textarea>
                </div>
                <Button type="submit" label="Send Message" className="w-full" />
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;