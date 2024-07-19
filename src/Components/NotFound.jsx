import React from 'react';
import Button from './Button';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-[346px] bg-[#faf6ed]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#484847] mb-4">404</h1>
        <p className="text-xl text-[#484847] mb-6">Oops! The page you are looking for does not exist.</p>
        <Button
          label={'Back To Home'}
          link={true}
          to='/'
        />
      </div>
    </div>
  );
};

export default NotFound;
