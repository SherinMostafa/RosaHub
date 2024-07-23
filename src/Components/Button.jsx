import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ label, className = '', link = false, to = '', type, ...props }) => {
  if (link) {
    return (
      <Link
        to={to}
        className={`text-sm font-semibold px-4 py-2 rounded-sm focus:outline-none transition-all duration-300 ${className}`}
      >
        <button>
          {label}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`text-sm font-semibold px-4 py-2 rounded-sm focus:outline-none transition-all duration-300 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
