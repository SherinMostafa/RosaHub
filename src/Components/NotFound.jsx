import React from 'react';
import Button from './Button';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-[346px] bg-[#faf6ed]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#484847] mb-4">404</h1>
        <p className="text-xl text-[#484847] mb-10">Oops! The page you are looking for does not exist.</p>
        <Button
          label={'Back To Home'}
          link={true}
          to='/'
          className='px-8 py-4 text-white bg-[#5cb25d] hover:bg-[#0f9015]'
        />
      </div>
    </div>
  );
};

export default NotFound;
