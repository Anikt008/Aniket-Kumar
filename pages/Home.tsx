import React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { ROUTES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="page-root">
      <Helmet>
        <title>Aniket Kumar | Clean & Professional Website Design</title>
        <meta
          name="description"
          content="I help small businesses and personal brands build trust online with modern, fast, and easy-to-use websites."
        />
      </Helmet>
      
      {/* Hero Section - STATIC */}
      <section className="min-h-[85vh] flex items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 mb-8">
              Clean & Professional <br className="hidden md:block" />
              Website Design
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
              I help small businesses and personal brands build trust online with modern, fast, and easy-to-use websites.
            </p>

            <div className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] mb-12">
              Business Websites &middot; Personal Brand Sites &middot; Clean UI Layouts
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to={ROUTES.CONTACT} label="Contact Me" className="px-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-gray-50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Designed for Trust</h2>
              <p className="text-gray-500 leading-relaxed font-medium mb-8">
                Every website I build focuses on clarity and professionalism. I believe simplicity is the best way to communicate value to your clients and grow your business.
              </p>
              <Button to={ROUTES.SERVICES} label="View Services" variant="outline" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Clarity", text: "Direct messaging that works." },
                { title: "Reliability", text: "Fast and secure layouts." },
                { title: "Professional", text: "High-trust visual style." },
                { title: "Modern", text: "Latest design standards." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white border border-gray-100">
                  <h4 className="font-bold text-sm mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-gray-400 text-xs font-medium leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;