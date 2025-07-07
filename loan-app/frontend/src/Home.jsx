import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import Navbar from './Navbar';
import homebg from './assets/Capture.JPG';

const Home = () => {
  
  return (
    <div>



    <div className="bg-white py-10 px-5 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between">

 

    {/* ///////end */}

      {/* Left Text Section */}
      <div className=" mt-[50px]  text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Quick and Easy <br />
          <span className="text-green-600">Loans for Your</span> <br />
          Financial Needs.
        </h1>
        <p className="text-gray-600 mb-6">
          Our loan services offer a hassle-free and streamlined borrowing experience,
          providing you with the funds you need in a timely manner to meet your financial
          requirements.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
       
                      <Link to={"/loanform"}>    Get started!</Link>
          
        </button>
      </div>

      {/* Right Image Section */}
      <div className="mb-8 md:mb-0 w-full md:w-1/2 flex justify-center">
        <img src={homebg} alt="Loan illustration" className="max-w-full h-auto" />
      </div>
    </div>
    </div>
  );
};

export default Home;
