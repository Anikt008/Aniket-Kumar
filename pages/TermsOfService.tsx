import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_INFO } from '../constants';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <Helmet>
        <title>Terms of Service | Aniket Kumar</title>
      </Helmet>
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-12">Terms of Service</h1>
      
      <div className="prose prose-slate prose-sm text-gray-500 space-y-8 font-medium leading-relaxed">
        <p>By accessing or using this website, you agree to comply with the following terms and conditions.</p>
        
        <div>
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Services</h2>
          <p>All website design services provided are subject to mutual agreement between the client and Aniket Kumar.</p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Intellectual Property</h2>
          <p>All content and layouts on this website are the property of Aniket Kumar unless otherwise stated.</p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Limitation of Liability</h2>
          <p>We shall not be held responsible for any loss or damage arising from the use of this website.</p>
        </div>

        <div className="pt-10 border-t border-gray-100">
          <p>
            For any questions, contact us at: 
            <br />
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-900 font-bold">
              {CONTACT_INFO.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;