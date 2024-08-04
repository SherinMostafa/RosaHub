import React from 'react';
import Button from './Button';

const PlantCard = ({ plant }) => {
  return (
    <div className="relative max-w-sm w-full rounded-sm overflow-hidden bg-white m-4 shadow-lg transform transition-transform duration-300 group hover:shadow-2xl">
      <img className="w-full h-72 object-cover" src={plant.image} alt={plant.name} />
      
      {/* Plant Name */}
      <div className="absolute top-4 left-4 text-white font-bold text-2xl z-10">
        {plant.name}
      </div>
      
      {/* Description */}
      <div
        className="pt-6 absolute inset-y-0 right-0 w-1/2 bg-black bg-opacity-70 text-white flex flex-col transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10"
      >
        <div
          className="flex-1 px-6 py-0"
          style={{ 
            overflowY: 'auto',
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* IE and Edge */
          }}
        >
          <p className="text-white text-base mb-2">{plant.description}</p>
        </div>
        <div className="p-6">
          <Button 
            link={true} 
            label={'More Info'} 
            to={`/plants/${plant.name}`} 
            className='text-white bg-[#5cb25d] hover:bg-[#0f9015]'
          />
        </div>
      </div>
      
      {/* Overlay Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50 -z-0"></div>
    </div>
  );
};

export default PlantCard;
