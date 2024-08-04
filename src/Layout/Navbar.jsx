import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Pages } from '../Constants/index';
import Button from '../Components/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menu = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menu.current && !menu.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-white shadow-md fixed inset-x-0 top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-[#02ec88] font-bold text-xl">RosaHub</Link>
            </div>

            {/* Navigation Links Container */}
            <div className="hidden md:flex md:items-center md:justify-center flex-1">
              {/* Navigation Links */}
              <div className="flex space-x-4">
                {Pages.filter(page => page.name !== 'NotFound').map(page => (
                  <Link
                    key={page.name}
                    to={page.path}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 ${
                      location.pathname === page.path
                        ? 'text-[#0f9015]'
                        : 'text-[#010101] hover:text-[#0f9015]'
                    } group`}
                  >
                    {page.icon && <page.icon className="mr-1" />} {page.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#0f9015] transition-all duration-300 ${location.pathname === page.path ? 'w-full' : 'group-hover:w-full'}`}></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Buttons Container on Large Screens */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Button label="Login" link={true} to="/Login" className='hover:text-[#0f9015]' />
              <Button label="Register" link={true} to="/Register" className='text-white bg-[#5cb25d] hover:bg-[#0f9015]' />
            </div>

            {/* Mobile Menu Button and Buttons Container */}
            <div className="flex items-center md:hidden">
              <div className="ml-4 flex space-x-2">
                <Button label="Login" link={true} to="/Login" className='hover:text-[#0f9015]' />
                <Button label="Register" link={true} to="/Register" className='text-white bg-[#5cb25d] hover:bg-[#0f9015]' />
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2.5 rounded-sm text-[#0f9015] focus:outline-none transition-all duration-300"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
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
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        ref={menu}
        className={`fixed inset-x-0 top-16 bg-[#faf6ed] transition-transform transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden z-40`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {Pages.filter(page => page.name !== 'NotFound').map(page => (
            <Link
              key={page.name}
              to={page.path}
              className="text-[#010101] hover:text-[#0f9015] px-3 py-2 rounded-md text-base font-medium flex items-center transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {page.icon && <page.icon className="mr-1" />} {page.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
