import React, { useState } from 'react';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    loanType: '',
    amount: '',
    tenure: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    employmentStatus: '',
    monthlyIncome: '',
    panNumber: '',
    aadhaarNumber: '',
    address: '',
    city: '',
    state: '',
    
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">QuickFunds Loan Application</h1>
          <p className="mt-4 text-lg text-gray-600">
            Fill out this form to apply for a loan with competitive rates and quick approval.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Progress Indicator */}
          <div className="bg-green-500 px-6 py-4">
            <div className="flex items-center justify-between">
              {['Loan Details', 'Personal Info', 'Financial Info', 'Review'].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`rounded-full h-8 w-8 flex items-center justify-center ${index < 1 ? 'bg-green-900 text-white' : 'bg-white text-blue-600'}`}>
                    {index + 1}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${index < 1 ? 'text-white' : 'text-blue-100'}`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            {/* Loan Details Section */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Loan Details</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="loanType"
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    required
                  >
                    <option value="">Select loan type</option>
                    <option value="personal">Personal Loan</option>
                    <option value="business">Business Loan</option>
                    <option value="education">Education Loan</option>
                    <option value="auto">Auto Loan</option>
                    <option value="home">Home Loan</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Amount (RS) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">Rs</span>
                    </div>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="block w-full pl-7 pr-12 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-3 border"
                      placeholder="50,000"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">.00</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="tenure" className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Tenure (months) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="tenure"
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    placeholder="12"
                    min="6"
                    max="60"
                    required
                  />
                </div>

                <div className="flex items-end">
                  <div className="w-full bg-gray-100 p-4 rounded-md">
                    <p className="text-sm text-gray-600">
                      Estimated EMI: <span className="font-bold  text-blue-700">
                        {formData.amount && formData.tenure ? 
                          `Rs${Math.round((formData.amount / formData.tenure) * 1.2)}` : 
                          '--'}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">*Approximate calculation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Personal Information</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      +92
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-3 border"
                      pattern="[0-9]{10}"
                      maxLength="10"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    required
                  >
                    <option value="">Select state</option>
                    <option value="MH">Sindh</option>
                    <option value="DL">Punjab</option>
                    <option value="KA">KPK</option>
                    <option value="TN">Islamabad</option>
                    <option value="TN">Kashmir</option>
                 
                    <option value="WB">Balohistan</option>
                 
                  </select>
                </div>

            
              </div>
            </div>

            {/* Financial Information Section */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Financial Information</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700 mb-1">
                    Employment Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="employmentStatus"
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    required
                  >
                    <option value="">Select employment status</option>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self Employed</option>
                    <option value="business">Business Owner</option>
                    <option value="student">Student</option>
                    <option value="unemployed">Currently Unemployed</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Income (Rs) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="monthlyIncome"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    required
                  />
                </div>

                

                <div>
                  <label htmlFor="aadhaarNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Aadhaar Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="aadhaarNumber"
                    name="aadhaarNumber"
                    value={formData.aadhaarNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    
                    maxLength="12"
                    placeholder="123456789012"
                    
                  />
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeTerms" className="font-medium text-gray-700">
                  I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">terms and conditions</a> and 
                  authorize QuickFunds to verify my information <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanForm;