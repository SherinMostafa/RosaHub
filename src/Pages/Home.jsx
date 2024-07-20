import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Button from '../Components/Button';

const Home = () => {
  return (
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
                  <Button label="Eplore Plants" link={true} to="/Plants" className='px-8 py-4 ' />
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
                  <Button label="Eplore Plants" link={true} to="/Plants" className='px-8 py-4 ' />
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
                  <Button label="Eplore Plants" link={true} to="/Plants" className='px-8 py-4 ' />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Home;
