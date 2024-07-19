import React from 'react';
import { Link } from 'react-router-dom';
import { Pages } from '../Constants';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#010101] text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:justify-between">
                    {/* Logo and Info */}
                    <div className="flex-1 mb-6 md:mb-0">
                        <h2 className="text-2xl text-[#02ec88] font-bold mb-2">RosaHub</h2>
                        <p className="text-white font-semibold">Your hub for amazing resources and connections.</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 mb-6 md:mb-0 lg:flex lg:items-center lg:justify-center">
                        {Pages.filter(page => page.name !== 'NotFound').map(page => (
                            <Link
                                key={page.name}
                                to={page.path}
                                className={'relative px-3 py-2 rounded-md text-sm font-medium flex items-center md:justify-center transition-all duration-300 hover:text-[#0f9015] group'}
                            >
                                {page.name}
                                <span className={'absolute bottom-0 left-0 w-0 h-0.5 bg-[#0f9015] transition-all duration-300 group-hover:w-full'}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Social Media Links */}
                    <div className="flex-1 mb-6 md:mb-0 ml-0 md:ml-6">
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link to="#" className="text-white hover:text-[#0f9015] transition duration-300">
                                <FaFacebookF />
                            </Link>
                            <Link to="#" className="text-white hover:text-[#0f9015] transition duration-300">
                                <FaTwitter />
                            </Link>
                            <Link to="#" className="text-white hover:text-[#0f9015] transition duration-300">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="border-t border-[#484847] mt-8"></div>

                {/* Copyright */}
                <div className="mt-4 text-center text-[#bebab3] text-sm font-bold">
                    <p>&copy; {new Date().getFullYear()} <span className='text-md text-[#02ec88]'>RosaHub</span>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
