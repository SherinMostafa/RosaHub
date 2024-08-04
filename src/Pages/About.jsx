import React from 'react';

const About = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#010101]">About Us</h2>
          <p className="mt-4 text-xl text-[#484847]">Discover our journey, mission, and values that drive us forward.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/2 p-4">
            <img
              src="/Assets/Images/pexels-scottwebb-1903965.jpg"
              alt="About Us"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-bold text-[#010101] mb-4">Our Mission</h3>
            <p className="text-lg text-[#484847] mb-4">
              At Plant Haven, our mission is to bring the beauty of nature into every home. We believe in the power of plants to improve our living spaces, enhance our wellbeing, and connect us to the natural world.
            </p>
            <h3 className="text-2xl font-bold text-[#010101] mb-4">Our Values</h3>
            <p className="text-lg text-[#484847]">
              We are committed to sustainability, quality, and customer satisfaction. Our plants are sourced from the best growers and cared for with the utmost attention to detail. We strive to provide our customers with not only beautiful plants but also the knowledge and resources to care for them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
