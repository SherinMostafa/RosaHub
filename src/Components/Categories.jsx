import React, { useState } from 'react';
import Button from './Button';
import { Category, Plant } from '../Constants';

const Categories = ({ onFilterChange }) => {
  const [activeCategory, setActiveCategory] = useState('Indoor Plants'); // Default active category

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Filter plants based on the selected category and pass it to Home
    const filteredPlants = Plant.filter(plant => plant.category === category);
    onFilterChange(filteredPlants); // Notify Home of the filtered plants
  };

  return (
    <div>
      {/* Category Buttons */}
      <div className="flex flex-col items-center justify-center pt-16 pb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Plant Categories</h2>
        <hr className='w-32 border border-[#0f9015] mx-auto mt-6 mb-14' />
        <div className="flex flex-wrap justify-center gap-4">
          {Category.map((category) => (
            <Button
              key={category}
              label={category}
              className={`px-6 py-2 rounded-full border border-[#0f9015] duration-500 shadow-md ${category === activeCategory ? 'bg-[#0f9015] text-white shadow-md' : 'text-[#0f9015] hover:bg-[#0f9015] hover:text-white'}`}
              onClick={() => handleCategoryChange(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
