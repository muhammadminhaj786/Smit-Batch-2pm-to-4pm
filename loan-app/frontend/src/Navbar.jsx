import { Menu, X } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken('');
    navigate('/signin');
  };

  useEffect(() => {
    const tok = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (tok) setToken(tok);
    if (storedUser) setUser(storedUser);
  }, []);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      <nav className="top-0 bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-600">
            Quick<span className="text-gray-800">Funds</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-800 font-medium items-center">
            <Link to="/" className="hover:text-green-600"><li>Home</li></Link>
            <Link to="/work" className="hover:text-green-600"><li>How we work?</li></Link>
            <Link to="/about" className="hover:text-green-600"><li>About Us</li></Link>
            <Link to="/contactus" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"><li>Contact Us</li></Link>

            {!token ? (
              <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"><li>Sign up</li></Link>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  <img
                    src={user?.profileImage || `https://ui-avatars.com/api/?name=${user?.name || 'User'}`}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="hidden sm:inline">{user?.firstName || user?.email}</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                    <div className="px-4 py-2 text-sm text-gray-800 border-b">
                      <p>{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </ul>

          {/* Mobile Toggle */}
          <div className="md:hidden text-gray-800" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-6 pb-4">
            <ul className="space-y-4 text-gray-800 font-medium">
              <Link to="/" className="block hover:text-green-600"><li>Home</li></Link>
              <Link to="/work" className="block hover:text-green-600"><li>How we work?</li></Link>
              <Link to="/about" className="block hover:text-green-600"><li>About Us</li></Link>
              <Link to="/contactus" className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"><li>Contact Us</li></Link>
              {!token ? (
                <Link to="/signup" className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"><li>Sign up</li></Link>
              ) : (
                <button
                  onClick={logout}
                  className="block w-full text-left bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              )}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
