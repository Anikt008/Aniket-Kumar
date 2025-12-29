import React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { ROUTES } from '../constants';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Corporate Advisory Portal",
      label: "Demo Project 01",
      description: "A high-trust layout designed for consulting firms where clarity is the main objective.",
      bestFor: "Legal & Finance Firms"
    },
    {
      title: "Architectural Studio Showroom",
      label: "Demo Project 02",
      description: "A minimal, visual-first design focusing on large imagery and structured negative space.",
      bestFor: "Designers & Architects"
    },
    {
      title: "Modern Executive Blog",
      label: "Demo Project 03",
      description: "Typography-focused platform built for readability and building personal brand authority.",
      bestFor: "Speakers & Founders"
    }
  ];

  return (
    <div className="page-root">
      <Helmet>
        <title>Portfolio | Web Design Samples</title>
        <meta name="description" content="A curated selection of demo projects showcasing professional structure and design quality." />
      </Helmet>

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl mb-24">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8 text-gray-900">
            Selected Projects
          </h1>
          <p className="text-gray-500 leading-relaxed font-medium text-lg">
            These samples demonstrate a commitment to professional structure, clean aesthetics, and user clarity.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-gray-100 p-8 md:p-12"
            >
              <div className="md:col-span-8">
                <div className="bg-gray-50 aspect-video flex items-center justify-center border border-gray-100">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Preview Placeholder</span>
                </div>
              </div>

              <div className="md:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 block mb-4">{project.label}</span>
                <h3 className="text-xl font-bold tracking-tight mb-4 text-gray-900">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-8">
                  {project.bestFor}
                </div>
                <Button label="Inquire" to={ROUTES.CONTACT} variant="outline" className="w-full sm:w-auto" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;