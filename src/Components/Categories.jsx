import React, { useState } from 'react';
import Button from './Button';
import { Category, Plant } from '../Constants';

const Categories = ({ onFilterChange, displayStyle = 'button' }) => {
  const [activeCategory, setActiveCategory] = useState('All Plants'); // Default active category

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All Plants') {
      onFilterChange(Plant); // Show all plants
    } else {
      const filteredPlants = Plant.filter(plant => plant.category === category);
      onFilterChange(filteredPlants);
    }
  };

  return (
    <div className="md:p-8">
      <div className={`flex flex-wrap ${displayStyle === 'card' ? 'items-center' : 'gap-4 justify-center md:justify-start'}`}>
        {displayStyle !== 'card' && (
          <Button
            key="all-plants"
            label="All Plants"
            className={`px-4 py-2 border border-[#0f9015] duration-500 shadow-md text-xs ${activeCategory === 'All Plants' ? 'bg-[#0f9015] text-white shadow-md' : 'bg-white text-[#0f9015] hover:bg-[#0f9015] hover:text-white'}`}
            onClick={() => handleCategoryChange('All Plants')}
          />
        )}
        {Category.map((category, index) => (
          displayStyle === 'card' ? (
            <div
              key={category}
              className={`${index % 3 === 2 ? 'w-full' : 'w-full sm:w-1/2'}`}
            >
              <div className="relative h-80 rounded-sm overflow-hidden bg-white shadow-lg transition-transform duration-300 transform hover:shadow-xl group">
                {/* Category Image */}
                <img 
                  className="w-full h-full object-cover rounded-sm" 
                  src={`/Assets/Images/${category}.jpg`}
                  alt={category} 
                />

                {/* Category Name */}
                <Button
                  label={category}
                  link={true}
                  to={category}
                  className="absolute bottom-4 left-0 w-full h-20 bg-[#0f9015] text-white text-center py-4 font-bold transition-transform duration-300 transform translate-y-full group-hover:translate-y-1/2"
                />
              </div>
            </div>
          ) : (
            <Button
              key={category}
              label={category}
              className={`px-4 py-2 border border-[#0f9015] duration-500 shadow-md text-xs ${category === activeCategory ? 'bg-[#0f9015] text-white shadow-md' : 'bg-white text-[#0f9015] hover:bg-[#0f9015] hover:text-white'}`}
              onClick={() => handleCategoryChange(category)}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default Categories;
