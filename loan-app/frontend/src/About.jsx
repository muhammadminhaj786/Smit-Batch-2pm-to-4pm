import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center sm:text-4xl">
          About us
        </h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 md:p-10 shadow-md">
          <p className="text-xl font-semibold text-gray-700 mb-2 sm:text-2xl">
            Quickfunds - Your trusted financial partner for home.
          </p>
          
          <div className="space-y-4 mt-6">
            <p className="text-gray-600 sm:text-lg">
              Quick approvals, competitive rates, and personalized working to meet your unique needs.
            </p>
            <p className="text-gray-600 sm:text-lg">
              Empowering you to achieve your financial goals.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-blue-600">Quick Approvals</h3>
              <p className="text-sm text-gray-600 mt-1">Fast and hassle-free processing</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-blue-600">Competitive Rates</h3>
              <p className="text-sm text-gray-600 mt-1">Best rates in the market</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-blue-600">Personalized Service</h3>
              <p className="text-sm text-gray-600 mt-1">Tailored to your needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;