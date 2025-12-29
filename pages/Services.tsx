import React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { ROUTES } from '../constants';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Business Website Design",
      description: "Professional websites for small businesses with a focus on clarity and trust.",
      points: ["Professional Brand Image", "Service Spotlights", "Lead Generation"]
    },
    {
      id: 2,
      title: "Personal Brand Website Design",
      description: "Simple and clean websites for individuals and creators to house their expertise.",
      points: ["Clean Typography", "Personal Story", "Portfolio Integration"]
    },
    {
      id: 3,
      title: "Clean UI Layout Design",
      description: "Modern layouts with proper spacing and structure for a seamless user experience.",
      points: ["Minimalist Interface", "Logical Flow", "Mobile First"]
    }
  ];

  return (
    <div className="page-root">
      <Helmet>
        <title>Services | Professional Web Design</title>
        <meta name="description" content="Explore professional web design services tailored for small businesses and personal brands." />
      </Helmet>

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl mb-24">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8 text-gray-900">
            Professional Services
          </h1>
          <p className="text-gray-500 leading-relaxed font-medium text-lg">
            Straightforward design solutions that prioritize your business goals and user trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-10 border border-gray-100 flex flex-col h-full"
            >
              <span className="text-[10px] font-black text-blue-600 mb-6 tracking-[0.2em] uppercase">Service 0{service.id}</span>
              <h2 className="text-xl font-bold tracking-tight mb-4 text-gray-900">{service.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{service.description}</p>
              
              <ul className="space-y-3 pt-8 border-t border-gray-50">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center text-gray-400 text-[11px] font-bold uppercase tracking-wider">
                    <span className="w-1 h-1 bg-gray-300 mr-3 rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-20 border-t border-gray-50 text-center">
          <h3 className="text-2xl font-bold mb-6 tracking-tight">Ready to build something clean?</h3>
          <Button to={ROUTES.CONTACT} label="Get Started" />
        </div>
      </section>
    </div>
  );
};

export default Services;