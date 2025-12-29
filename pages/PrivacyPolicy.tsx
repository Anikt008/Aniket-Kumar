import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_INFO } from '../constants';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <Helmet>
        <title>Privacy Policy | Aniket Kumar</title>
      </Helmet>
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-12">Privacy Policy</h1>
      
      <div className="prose prose-slate prose-sm text-gray-500 space-y-8 font-medium leading-relaxed">
        <p>This website is owned and operated by Aniket Kumar. We respect your privacy and are committed to protecting any personal information you share with us.</p>

        <div>
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Information We Collect</h2>
          <p>We may collect personal information such as your name and email address when you submit a contact form.</p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To respond to your inquiries</li>
            <li>To communicate about our services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Data Security</h2>
          <p>We take reasonable steps to protect your personal data. However, no method of transmission over the internet is completely secure.</p>
        </div>

        <div className="pt-10 border-t border-gray-100">
          <p>
            If you have any questions, contact us at: 
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

export default PrivacyPolicy;