import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ label, onClick, className = '', link = false, to = '' }) => {
  if (link) {
    return (
      <Link
        to={to}
        className={`text-sm font-semibold text-white px-4 py-2 rounded-sm bg-[#5cb25d] hover:bg-[#0f9015] focus:outline-none transition-all duration-300 ${className}`}
      >
        <button>
          {label}
        </button>
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={`text-sm font-semibold text-[#010101] px-4 py-2 rounded-sm hover:text-[#0f9015] focus:outline-none transition-all duration-300 ${className}`}
    >
      <button
        onClick={onClick}
      >
        {label}
      </button>
    </Link>
  );
};

export default Button;
