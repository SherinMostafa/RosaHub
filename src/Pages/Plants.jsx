import React, { useState } from 'react';
import Categories from '../Components/Categories';
import { Plant } from '../Constants';
import PlantCard from '../Components/PlantCard';
import { FaTh, FaList } from 'react-icons/fa';

function Plants() {
  const [filteredPlants, setFilteredPlants] = useState(Plant);
  const [displayStyle, setDisplayStyle] = useState('vertical');

  const toggleDisplayStyle = () => {
    setDisplayStyle(prevStyle => (prevStyle === 'vertical' ? 'horizontal' : 'vertical'));
  };

  return (
    <>
      <section id='plant-section' className='flex flex-col items-center'>
        <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-8">Explore Our Plant Collection</h2>
        <hr className='w-32 border border-[#0f9015] mx-auto' />
        
        <h4 className="text-[#484847] text-sm md:text-base font-semibold mt-8 mx-6 md:mx-16 text-center">Discover a range of plants perfect for any season and garden. From colorful flowers to hardy varieties, find the ideal plant to brighten your space.</h4>

          {/* Plant Cards */}
          <div className='flex flex-col md:flex-row md:items-start w-full md:mt-16 md:py-8'>
            {/* Categories Filter */}
            <div className='md:max-w-[200px] mt-10'>
              <Categories onFilterChange={setFilteredPlants} />
            </div>

            <div className=' relative w-full flex flex-wrap py-14 pl-4 md:justify-normal border-l-2 border-[#0f9015]'>
              {/* Toggle Button */}
              <div 
                onClick={toggleDisplayStyle} 
                className="absolute top-6 md:top-4 right-4 p-2 bg-[#0f9015] text-white shadow-md hover:bg-[#0f9015]/80 transition duration-300"
                aria-label="Toggle Display Style"
              >
                {displayStyle === 'vertical' ? <FaList size={20} /> : <FaTh size={20} />}
              </div>

              {filteredPlants.length === 0 ? (
                <p className="font-semibold text-base text-[#e53529] mt-8 md:ml-10">No plants available for this category.</p>
              ) : (
                filteredPlants.map((filteredPlant, index) => (
                  <PlantCard key={index} plant={filteredPlant} styleType={displayStyle} />
                ))
              )}
            </div>

          </div>
      </section>
    </>
  );
}

export default Plants;
