import React from 'react';
import Button from './Button';

const PlantCard = ({ plant, styleType = 'default' }) => {
  const isHorizontal = styleType === 'horizontal';
  const isVertical = styleType === 'vertical';

  return (
    <div
      className={`relative ${
        isHorizontal
          ? 'flex max-w-5xl max-h-[264px] h-fit'
          : isVertical
          ? 'flex flex-col max-w-xs'
          : 'max-w-sm'
      } w-full rounded-sm overflow-hidden bg-white m-4 shadow-lg transform transition-transform duration-300 group hover:shadow-2xl`}
    >
      {/* Image */}
      <img
        className={`${
          isHorizontal
            ? 'w-1/3 h-auto min-w-[250px]'
            : isVertical
            ? 'w-full h-60'
            : 'w-full h-72'
        } object-cover`}
        src={plant.image}
        alt={plant.name}
      />
      
      {/* Plant Name */}
      {isVertical && (
        <div className="px-4 pt-4 text-[#b25e7e] font-bold text-2xl">
          {plant.name}
        </div>
      )}

      {/* Plant Name */}
      {!isHorizontal && !isVertical && (
        <div className="absolute top-4 left-4 text-[#b25e7e] font-bold text-2xl z-10">
          {plant.name}
        </div>
      )}
      
      {/* Description */}
      <div
        className={`${
          isHorizontal
            ? 'w-full p-4 flex flex-col justify-between text-[#484847]'
            : isVertical
            ? 'flex-1 p-4 text-[#484847]'
            : 'pt-6 absolute inset-y-0 right-0 w-1/2 bg-black bg-opacity-70 text-white flex flex-col transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10'
        }`}
      >
        {isHorizontal && (
          <div className="text-[#b25e7e] font-bold text-2xl mb-2">
            {plant.name}
          </div>
        )}
        
        <div
          className={`${
            isHorizontal || isVertical ? 'pb-4' : 'flex-1 px-6 py-0'
          }`}
          style={{ 
            overflowY: 'auto',
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* IE and Edge */
          }}
        >
          <p className={`${isHorizontal || isVertical ? 'text-[#484847] font-medium text-sm md:text-base' : 'text-white'} text-base mb-2`}>
            {plant.description}
          </p>
        </div>
        <div className={`${isHorizontal || isVertical ? 'py-4' : 'p-6'}`}>
          <Button
            link={true}
            label={'More Info'}
            to={`/plants/${plant.name}`}
            className='text-white bg-[#5cb25d] hover:bg-[#0f9015]'
          />
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
