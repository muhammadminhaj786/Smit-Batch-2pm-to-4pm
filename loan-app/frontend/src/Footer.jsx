import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* QuickFunds Logo and Mission */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">QuickFunds</h2>
            <p className="text-gray-300">
              Our mission is to empower individuals and businesses by providing them with the
              financial resources they need to achieve their goals.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">OUR SERVICES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Personal Loan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Business Loan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Education Loan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Auto loan</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 999009 999009
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@quickfunds.com
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div>Address line 1</div>
                  <div>Address line 2</div>
                  <div>City, state - pin code</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} QuickFunds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;