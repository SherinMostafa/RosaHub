import React, { forwardRef } from 'react';

const Input = forwardRef(({ label, type = 'text', className = '', float = true, textarea = false, error, ...props }, ref) => {
  if (float) {
    if (textarea) {
      return (
        <div className={`relative ${className}`}>
          <textarea
            id={label}
            ref={ref}
            className={`block w-full px-3 py-2 mb-8 text-sm text-[#010101] font-semibold bg-white border ${error ? 'border-[#e53529]' : 'border-[#5cb25d]'} rounded-sm shadow-sm appearance-none focus:outline-none focus:ring-0 ${error ? 'focus:border-[#e53529]' : 'focus:border-[#5cb25d]'} peer`}
            placeholder=" "
            {...props}
          />
          <label
            htmlFor={label}
            className="absolute text-sm text-[#010101] font-semibold duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:-translate-x-4 left-2"
          >
            {label}
          </label>
        </div>
      );
    }

    return (
      <div className={`relative ${className}`}>
        <input
          type={type}
          id={label}
          ref={ref}
          className={`block w-full px-3 py-2 mb-8 text-sm text-[#010101] font-semibold bg-white border ${error ? 'border-[#e53529]' : 'border-[#5cb25d]'} rounded-sm shadow-sm appearance-none focus:outline-none focus:ring-0 ${error ? 'focus:border-[#e53529]' : 'focus:border-[#5cb25d]'} peer`}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={label}
          className="absolute text-sm text-[#010101] font-semibold duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:-translate-x-4 left-2"
        >
          {label}
        </label>
      </div>
    );
  }

  if (textarea) {
    return (
      <div className={`relative ${className}`}>
        <label htmlFor={label} className="block text-sm font-semibold text-[#010101]">
          {label}
        </label>
        <textarea
          id={label}
          ref={ref}
          className={`block w-full px-3 py-2 mt-2 mb-4 text-sm text-[#010101] font-semibold bg-white border ${error ? 'border-[#e53529]' : 'border-[#5cb25d]'} rounded-sm shadow-sm focus:outline-none focus:ring-0 ${error ? 'focus:border-[#e53529]' : 'focus:border-[#5cb25d]'}`}
          {...props}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <label htmlFor={label} className="block text-sm font-semibold text-[#010101]">
        {label}
      </label>
      <input
        type={type}
        id={label}
        ref={ref}
        className={`block w-full px-3 py-2 mt-2 mb-4 text-sm text-[#010101] font-semibold bg-white border ${error ? 'border-[#e53529]' : 'border-[#5cb25d]'} rounded-sm shadow-sm focus:outline-none focus:ring-0 ${error ? 'focus:border-[#e53529]' : 'focus:border-[#5cb25d]'}`}
        {...props}
      />
    </div>
  );
});

export default Input;
