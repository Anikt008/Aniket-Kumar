import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="page-root">
      <Helmet>
        <title>About | Aniket Kumar</title>
        <meta name="description" content="Learn about Aniket Kumar and the professional approach behind every web design project." />
      </Helmet>

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12 text-gray-900">About Me</h1>
          
          <div className="space-y-10 text-gray-500 text-base leading-relaxed font-medium">
            <p className="text-lg text-gray-900 font-bold">
              I am Aniket Kumar, a website designer based in {CONTACT_INFO.location}.
            </p>
            <p>
              My focus is simple: designing clean, professional websites that are easy to understand and help businesses look trustworthy online. I believe that a website is a tool to communicate value, and clarity is the most important part of that communication.
            </p>
            <p>
              My approach involves listening to your business goals, stripping away unnecessary clutter, and building a design that puts your content and brand first. No exaggerated claims—just honest, quality work that meets professional standards.
            </p>
            <p>
              Whether you are a small business owner or an ambitious personal brand, I provide a reliable and straightforward design service tailored to your needs.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="border border-gray-100 p-8">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-6">Work Approach</h4>
              <ul className="space-y-4 text-sm font-semibold text-gray-900">
                <li className="flex items-center"><span className="w-1 h-1 bg-blue-600 mr-3"></span> Clear Communication</li>
                <li className="flex items-center"><span className="w-1 h-1 bg-blue-600 mr-3"></span> Fast Loading Layouts</li>
                <li className="flex items-center"><span className="w-1 h-1 bg-blue-600 mr-3"></span> Mobile Optimization</li>
                <li className="flex items-center"><span className="w-1 h-1 bg-blue-600 mr-3"></span> Trust-First Design</li>
              </ul>
            </div>
            <div className="border border-gray-100 p-8">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-6">Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {["UI Design", "Clean Typography", "Responsive Layouts", "Branding", "User Experience"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-600 border border-gray-100">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;