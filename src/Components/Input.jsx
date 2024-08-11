import React, { forwardRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from './Button';

const Input = forwardRef(({ label, type = 'text', className = '', float = true, textarea = false, error, ...props }, ref) => {
  const [inputType, setInputType] = useState(type);

  const handleVisibilityToggle = () => {
    if (type === 'password') {
      setInputType(inputType === 'password' ? 'text' : 'password');
    }
  };

  if (float) {
    if (textarea) {
      return (
        <div className={`relative ${className}`}>
          <textarea
            id={label}
            ref={ref}
            className={`block w-full px-3 py-2 text-sm text-[#484847] font-semibold bg-white border ${error ? 'border-[#e53529]' : 'border-[#5cb25d]'} rounded-sm shadow-sm appearance-none focus:outline-none focus:ring-0 ${error ? 'focus:border-[#e53529]' : 'focus:border-[#5cb25d]'} peer`}
            placeholder=" "
            {...props}
          />
          <label
            htmlFor={label}
            className="absolute top-2 left-2 text-sm text-[#484847] font-semibold transition-all duration-300 ease-in-out transform -translate-y-4 scale-75 origin-top-left bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:scale-75"
          >
            {label}
          </label>
        </div>
      );
    }

    return (
      <div className="relative">
        <input
          type={inputType}
          id={label}
          ref={ref}
          className={`block w-full px-3 py-2 mb-2 text-sm text-[#484847] font-semibold bg-white border ${error ? 'border-[#e53529]' : 'border-[#5cb25d]'} rounded-sm shadow-sm appearance-none focus:outline-none focus:ring-0 ${error ? 'focus:border-[#e53529]' : 'focus:border-[#5cb25d]'} peer pr-10`}
          placeholder=" "
          {...props}
        />
        {type === 'password' && (
          <Button
            type="button"
            label={inputType === 'password' ? <FaEyeSlash /> : <FaEye />}
            onClick={handleVisibilityToggle}
            className="absolute top-7 right-0 flex items-center px-4 text-sm text-[#484847]"
          />
        )}
        <label
          htmlFor={label}
          className="absolute top-2 left-2 text-sm text-[#484847] font-semibold transition-all duration-300 ease-in-out transform -translate-y-4 scale-75 origin-top-left bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:scale-75"
        >
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <label htmlFor={label} className="block text-sm font-semibold text-[#484847]">
        {label}
      </label>
      <input
        type={inputType}
        id={label}
        ref={ref}
        className={`block w-full px-3 py-2 mt-2 mb-4 text-sm text-[#484847] font-semibold bg-white border ${error ? 'border-[#e53529]' : 'border-[#5cb25d]'} rounded-sm shadow-sm focus:outline-none focus:ring-0 ${error ? 'focus:border-[#e53529]' : 'focus:border-[#5cb25d]'} ${type === 'password' ? 'pr-10' : ''}`}
        {...props}
      />
      {type === 'password' && (
        <Button
          type="button"
          label={inputType === 'password' ? <FaEyeSlash /> : <FaEye />}
          onClick={handleVisibilityToggle}
          className="absolute top-8 right-0 flex items-center px-4 text-sm text-[#484847]"
        />
      )}
    </div>
  );
});

export default Input;
