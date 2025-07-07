import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User, Briefcase, Car, Building2 } from 'lucide-react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const iconMapper = (loanType) => {
  const lower = loanType.toLowerCase();
  if (lower.includes('personal')) return <User size={40} className="text-green-700 mx-auto mb-4" />;
  if (lower.includes('business')) return <Briefcase size={40} className="text-green-700 mx-auto mb-4" />;
  if (lower.includes('auto') || lower.includes('car')) return <Car size={40} className="text-green-700 mx-auto mb-4" />;
  return <Building2 size={40} className="text-green-700 mx-auto mb-4" />; // fallback icon
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8080/loanType') // change base URL if needed
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching loan types:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-r from-white to-green-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">Our Services</h2>

        {loading ? (
          <p className="text-gray-600">Loading services...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service._id || index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                {iconMapper(service.loanType)}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.loanType}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.pusrpose}</p>
                <button className="bg-gray-100 text-gray-800 border border-gray-300 px-4 py-2 rounded-full hover:bg-green-100 transition">
                  <Link to="/loanform">Apply now</Link>
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
            <Link to="/loanform">View more</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
