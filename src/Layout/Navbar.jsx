// src/Layout/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Pages } from '../Constants/index'; // Make sure the path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to="/" className="text-[#02ec88] font-bold text-xl">RosaHub</Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {Pages.filter(page => page.name !== 'NotFound').map(page => (
                  <Link
                    key={page.name}
                    to={page.path}
                    className="text-[#010101] px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    {page.icon && <page.icon className="mr-1" />} {page.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#010101] hover:text-[#010101] hover:bg-[#02ec88] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#010101]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <FaBars className="block h-4 w-4" />
              ) : (
                <FaTimes className="block h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {Pages.filter(page => page.name !== 'NotFound').map(page => (
            <Link
              key={page.name}
              to={page.path}
              className="text-[#010101] px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              {page.icon && <page.icon className="mr-1" />} {page.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
