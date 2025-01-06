import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#F0E6FF] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-4">
              <img src="/shes.svg" alt="SheSecure" className="h-16 w-16" />
              <span className="text-2xl font-semibold text-gray-800">SheSecure</span>
            </Link>
          </div>

          {/* Main Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium">Home</Link>
            <Link to="/department" className="text-gray-700 hover:text-blue-700 font-medium">Department</Link>
            <Link to="/topics" className="text-gray-700 hover:text-blue-700 font-medium">Topics</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-700 font-medium">About</Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button className="p-2 hover:bg-[#E6D9FF] rounded-full transition-colors">
              <span className="text-gray-600">🔍</span>
            </button>
            
            {/* Login Button */}
            <button className="hidden md:block bg-[#2B4EFF] text-white px-6 py-1.5 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Login
            </button>

            {/* Join Button */}
            <button className="bg-[#2B4EFF] text-white px-6 py-1.5 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Join SheSecure
            </button>

            {/* Mobile Menu Button */}
            <button className="p-2 hover:bg-[#E6D9FF] rounded-full transition-colors md:hidden">
              <span className="text-gray-600">☰</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
