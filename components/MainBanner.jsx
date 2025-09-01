import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className="relative">
      {/* Desktop Banner */}
      <img
        src={assets.banner3_image}
        alt="Main Banner"
        className="w-full hidden md:block"
      />
      {/* Mobile Banner */}
      <img
        src={assets.banner3_image}
        alt="Main Banner Mobile"
        className="w-full block md:hidden"
      />

      {/* Content overlay */}
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
        <h1 className='text-3xl md:text-5xl font-bold max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15 text-[#00534E]'>
          From Hands That Craft, To Hearts That Treasure..!
        </h1>

        <div className='flex items-center mt-6 font-medium'>
          <Link 
            to="/products" 
            className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-[#D8B4A0] hover:bg-[#C89F8A] transition rounded text-[#00534E] cursor-pointer'
          >
            Shop Now
            <img 
              className='md:hidden transition group-hover:translate-x-1' 
              src={assets.white_arrow_icon} 
              alt="Arrow"
            />
          </Link>

          <Link 
            to="/products" 
            className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer text-[#6D4C41] hover:text-[#00534E]'
          >
            Explore Deals
            <img 
              className='transition group-hover:translate-x-1' 
              src={assets.black_arrow_icon} 
              alt="Arrow"
            />  
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
