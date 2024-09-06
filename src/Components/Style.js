import React from 'react';
import house1 from './Images/house1.avif';
import house2 from './Images/house2.avif';
import house3 from './Images/house3.avif';
import house4 from './Images/house4.avif';
import house5 from './Images/Home.webp';
import house6 from './Images/Home.avif';
import people from './Images/people.avif';

function Style() {
  return (
    <div className='py-10'>
      {/* Heading and Overlayed Text */}
      <div className="relative">
        <img src={house5} alt="House" className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" />
        <h1 className='absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black bg-opacity-50'>
          Elevate to the Next Level
        </h1>
      </div>

      {/* Paragraph Below the Image */}
      <p className='text-center mt-6 mb-10'>
        Explore our premium home renovation services that combine aesthetics with functionality to elevate your living space to the next level.
      </p>
      
      {/* Image Grid with Text Below */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        
        {/* Block 1 */}
        <div className='relative'>
          <img src={house1} alt="House 1" className='w-full h-64 object-cover transition-transform duration-300 hover:scale-105' />
          <h1 className='text-black text-lg font-bold text-center p-2 bg-white'>
            01 Discovery Call
          </h1>
        </div>

        {/* Block 2 */}
        <div className='relative'>
          <img src={house2} alt="House 2" className='w-full h-64 object-cover transition-transform duration-300 hover:scale-105' />
          <h1 className='text-black text-lg font-bold text-center p-2 bg-white'>
            02 In Home Consultancy
          </h1>
        </div>

        {/* Block 3 */}
        <div className='relative'>
          <img src={house3} alt="House 3" className='w-full h-64 object-cover transition-transform duration-300 hover:scale-105' />
          <h1 className='text-black text-lg font-bold text-center p-2 bg-white'>
            03 Scope Selection and Estimate
          </h1>
        </div>

        {/* Block 4 */}
        <div className='relative'>
          <img src={house4} alt="House 4" className='w-full h-64 object-cover transition-transform duration-300 hover:scale-105' />
          <h1 className='text-black text-lg font-bold text-center p-2 bg-white'>
            04 Project Prep and Selection
          </h1>
        </div>

        {/* Block 5 */}
        <div className='relative'>
          <img src={house5} alt="House 5" className='w-full h-64 object-cover transition-transform duration-300 hover:scale-105' />
          <h1 className='text-black text-lg font-bold text-center p-2 bg-white'>
            05 Construction
          </h1>
        </div>

        {/* Block 6 */}
        <div className='relative'>
          <img src={house6} alt="House 6" className='w-full h-64 object-cover transition-transform duration-300 hover:scale-105' />
          <h1 className='text-black text-lg font-bold text-center p-2 bg-white'>
            06 Final Walkthrough and Selection Process
          </h1>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 px-4 max-w-5xl mx-auto">
        <div className="flex gap-4">
          <button className="w-1/2 bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 hover:shadow-lg transition-shadow duration-300">
            Schedule Discovery Call
          </button>
          <button className="w-1/2 bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 hover:shadow-lg transition-shadow duration-300">
            See Financing Options
          </button>
        </div>

        {/* Make slider here */}
        <div className="container">
          {/* Slider component can be placed here */}
        </div>

        {/* Service Block 6 */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-12 mt-10">
          <img
            src={people}
            alt="Service 6"
            className="w-full lg:w-1/2 h-80 object-cover rounded-lg shadow-md lg:ml-6 mb-6 lg:mb-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-2">About Vaibhav Construction</h1>
            <p className="text-lg mb-4">
              At Vaibhav Construction, we take pride in transforming visions into reality with unparalleled craftsmanship and dedication. With years of experience in the construction industry, we specialize in delivering high-quality home renovation and construction services that cater to your unique needs and preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Style;
