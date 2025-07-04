import React from 'react';
import Navbar from './Navbar';
import img from "./assets/step1.JPG";
import img2 from "./assets/step2.JPG";
import img3 from "./assets/ca3.JPG";
import img4 from "./assets/44.JPG";




const steps = [
  {
    title: "Application",
    description:
      "The borrower submits a loan application to the bank, either in person, online, or through other channels. The application includes personal information and financial data, such as income, employment history, credit score, and the purpose of the loan.",
    image: img,
  },
  {
    title: "Documentation and Verification",
    description:
      "The bank requests supporting documents from the borrower, such as identification proof, income statements, tax return statements, and collateral details (if applicable). The bank verifies the provided information to assess the borrower's credibility/information and eligibility for the loan.",
    image: img2,
  },
  {
    title: "Credit Assessment",
    description:
      "The bank conducts a credit assessment to evaluate the borrower’s creditworthiness and repayment history. The risk assessment typically includes the borrower's credit history, income stability, debt-to-income ratio, and other factors.",
    image: img3,
  },
  {
    title: "Loan Approval",
    description:
      "If the bank approves, the bank's lending criteria and process determine the loan amount, interest rate, repayment term and any associated fees.",
    image:img4,
  },
];

const Work = () => {
  return (
   <div>

     <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">How We Work</h2>

      <div className="space-y-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center gap-10`}
          >
            {/* Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src={step.image}
                alt={step.title}
                className="max-w-[200px] md:max-w-[250px] h-auto"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                <span className="text-gray-400 text-xl mr-2">0{index + 1}</span>
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
   </div>
  );
};

export default Work;
