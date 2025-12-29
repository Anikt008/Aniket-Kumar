import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES, CONTACT_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: ROUTES.HOME },
    { name: 'Services', path: ROUTES.SERVICES },
    { name: 'Portfolio', path: ROUTES.PORTFOLIO },
    { name: 'About', path: ROUTES.ABOUT },
    { name: 'Contact', path: ROUTES.CONTACT },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to={ROUTES.HOME} className="text-sm font-black tracking-widest text-gray-900 uppercase">
            Aniket Kumar
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === ROUTES.HOME}
                className={({ isActive }) => `text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest">
              {isMenuOpen ? 'Close' : 'Menu'}
            </span>
          </button>
        </div>

        {/* Mobile Nav Overlay - Static Logic */}
        {isMenuOpen && (
          <nav className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 md:hidden flex flex-col p-10 space-y-6 shadow-xl">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === ROUTES.HOME}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `text-xl font-bold ${
                  isActive ? 'text-blue-600' : 'text-gray-900'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-sm font-black mb-6 tracking-widest uppercase">Aniket Kumar</h3>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-6 font-medium">
                Website designer focused on clarity, structure, and professional online presence.
              </p>
              <div className="text-sm font-semibold text-gray-900">
                Based in {CONTACT_INFO.location}
              </div>
            </div>
            
            <div className="md:text-right flex flex-col md:items-end justify-center">
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-900 hover:text-blue-600 transition-colors font-semibold text-sm mb-2">
                {CONTACT_INFO.email}
              </a>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} className="text-gray-900 hover:text-blue-600 transition-colors font-semibold text-sm">
                WhatsApp: {CONTACT_INFO.whatsapp}
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Aniket Kumar
            </p>
            <div className="flex gap-8">
              <Link to={ROUTES.PRIVACY} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900">Privacy Policy</Link>
              <Link to={ROUTES.TERMS} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;