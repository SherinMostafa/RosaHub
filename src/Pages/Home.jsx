// Home.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Button from '../Components/Button';
import PlantCard from '../Components/PlantCard';
import Categories from '../Components/Categories';
import { Plant } from '../Constants/index';

const Home = () => {
  const [filteredPlants, setFilteredPlants] = useState(Plant); // Initialize with all plants

  return (
    <>
      <section id='landing-section' className="">
        <div className="">
          <Swiper
            style={{
              '--swiper-pagination-color': '#02ec88',
            }}
            modules={[Autoplay, Pagination, EffectFade]}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
            }}
            pagination={{
              clickable: true,
            }}
            effect='fade'
            className="w-full"
          >
            <SwiperSlide>
              <div className="relative w-full h-[90vh]">
                <img src="/Assets/Images/pexels-designecologist-1005058.jpg" alt="Plant 1" className="w-full h-full object-cover shadow-lg" />
                <div className="absolute inset-0 flex flex-col justify-center p-4 bg-black bg-opacity-50">
                  <div className="text-center text-white">
                    <h2 className="text-[#e6ca51] text-3xl md:text-4xl lg:text-5xl mb-6 font-bold">Explore Rare Species</h2>
                    <p className="text-lg max-w-md mx-auto font-semibold mb-10">Dive into the world of rare and exotic plants. Perfect for the true plant enthusiast.</p>
                    <Button label="Explore Plants" link={true} to="/Plants" className='px-8 py-4 text-white bg-[#5cb25d] hover:bg-[#0f9015]' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[90vh]">
                <img src="/Assets/Images/pexels-kenzero14-22610785.jpg" alt="Plant 2" className="w-full h-full object-cover shadow-lg" />
                <div className="absolute inset-0 flex flex-col justify-center p-4 bg-black bg-opacity-50">
                  <div className="text-center text-white">
                    <h2 className="text-[#e6ca51] text-3xl md:text-4xl lg:text-5xl mb-6 font-bold">Gardening Tips & Tricks</h2>
                    <p className="text-lg max-w-md mx-auto font-semibold mb-10">Learn the best practices for growing healthy and vibrant plants in any environment.</p>
                    <Button label="Explore Plants" link={true} to="/Plants" className='px-8 py-4 text-white bg-[#5cb25d] hover:bg-[#0f9015]' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[90vh]">
                <img src="/Assets/Images/pexels-pixabay-37076.jpg" alt="Plant 3" className="w-full h-full object-cover shadow-lg" />
                <div className="absolute inset-0 flex flex-col justify-center p-4 bg-black bg-opacity-50">
                  <div className="text-center text-white">
                    <h2 className="text-[#e6ca51] text-3xl md:text-4xl lg:text-5xl mb-6 font-bold">Master Plant Care</h2>
                    <p className="text-lg max-w-md mx-auto font-semibold mb-10">Unlock expert advice and techniques to help your plants thrive.</p>
                    <Button label="Explore Plants" link={true} to="/Plants" className='px-8 py-4 text-white bg-[#5cb25d] hover:bg-[#0f9015]' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section id='plant-section' className='flex flex-col items-center'>
        <Categories onFilterChange={setFilteredPlants} />

        <div className='flex flex-wrap justify-center lg:justify-normal border-[#0f9015] border-t-[2px] py-8 container'>
          {filteredPlants.length === 0 ? (
              <p className="font-semibold text-base text-[#e53529]">No plants available for this category.</p>
            ) : (
              filteredPlants.map((plant, index) => (
                <PlantCard key={index} plant={plant} />
              ))
            )}
        </div>
      </section>
    </>
  );
};

export default Home;
